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
    title: 'Nirav',
    subtitle: 'My Blog and Portfolio Website',
    description: 'My Blog and Portfolio Website built using Dante theme of Astro.js',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
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
            text: 'Blog',
            href: '/blog'
        },
        // {
        //     text: 'Tags',
        //     href: '/tags'
        // }
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
        // {
        //     text: 'Terms',
        //     href: '/terms'
        // },
        {
            text: 'View Sauce',
            href: 'https://github.com/ni3rav/portfolio-blog'
        }
    ],
    socialLinks: [
        // {
        //     text: 'Dribbble',
        //     href: 'https://dribbble.com/'
        // },
        {
            text: 'Instagram',
            href: 'https://instagram.com/aightnirav'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/ni3rav'
        }
    ],
    hero: {
        title: 'Oh hello there!',
        text: "I'm **Nirav**, an aspiring web developer and Computer Science freshman(sophmore in a few days) at Adani University. I've built this website to get my hands on Astro.js and it's been while since I built some stuff that I'd actually enjoy. I keep on experimenting with various stuffs(mostly frontend tbh) at my <a href='https://github.com/ni3rav'>GitHub</a> and yeah I'm on <a href='https://twitter.com/ni3rav'>Twitter/X</a> too.",
        image: {
            src: '/hero.jpeg',
            alt: 'A person sitting at a desk in front of a computer'
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
