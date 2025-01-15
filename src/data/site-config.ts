export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Nirav Mehta',
    subtitle: 'The place where I write about the stuff I enjoy',
    description: 'My Blog and Portfolio Website built using Dante theme of Astro.js',
    // image: {
    // src: '/dante-preview.jpg',
    // alt: 'Dante - Astro.js and Tailwind CSS theme'
    // },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Resume',
            href: '/nirav_resume.pdf'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },

        {
            text: 'View Sauce',
            href: 'https://github.com/ni3rav/portfolio-blog'
        }
    ],
    socialLinks: [
        {
            text: 'Instagram',
            href: 'https://instagram.com/ni3rav'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/ni3rav'
        }
    ],
    hero: {
        title: 'Oh hello there!',
        text: "I am a passionate software developer studying Computer Science at Adani University. I enjoy building web applications and experimenting with frontend technologies. I like cats!",
        image: {
            src: './hero.jpeg',
            alt: 'A cat picture, cause why not'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    // subscribe: {
    //     title: 'Subscribe to Dante Newsletter',
    //     text: 'One update per week. All the latest posts directly in your inbox.',
    //     formUrl: '#'
    // },
    postsPerPage: 4,
    projectsPerPage: 4
};

export default siteConfig;
