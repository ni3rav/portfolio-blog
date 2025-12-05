import createMDX from "@next/mdx";

let userConfig = undefined;
try {
  // try to import ESM first
  userConfig = await import("./v0-user-next.config.mjs");
} catch (e) {
  try {
    // fallback to CJS import
    userConfig = await import("./v0-user-next.config");
  } catch (innerError) {
    // ignore error
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable Turbopack compatibility
  turbopack: {},
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

if (userConfig) {
  // ESM imports will have a "default" property
  const config = userConfig.default || userConfig;

  for (const key in config) {
    if (
      typeof nextConfig[key] === "object" &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...config[key],
      };
    } else {
      nextConfig[key] = config[key];
    }
  }
}

// Sanitize turbopack configuration to remove invalid keys
if (nextConfig.turbopack && nextConfig.turbopack.conditions) {
  delete nextConfig.turbopack.conditions;
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
const finalConfig = withMDX(nextConfig);

// Sanitize turbopack configuration in the final config object
if (finalConfig.turbopack && finalConfig.turbopack.conditions) {
  delete finalConfig.turbopack.conditions;
}

export default finalConfig;
