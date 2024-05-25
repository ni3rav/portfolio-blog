---
title: Getting my hands dirty with Astro.js
excerpt: In this blog I will briefly run through the process on how I created my personal/blog website using Astro.js and How I deployed it live on the Web.
publishDate: 'April 25, 2024'
---

This tutorial should be sufficient to give you a brief overview about Astro.js and You'd be able to understand how an Astro.js project is structured.  

### But WTF is Astro.js ?

As stated by the ChatGPT,
> Astro is a modern static site builder designed for creating fast, optimized websites with a focus on performance.

And actually there's a lot more to know about Astro.js Especially the island architecture for a webpage and how it tries to ship least amount of JavaScript to the client side but that's not our concern right now.

### Prerequisite

To be fair it's quite easy to get started with Astro if you want to build static sites only and in this blog I'll be addressing following stuff so I am assuming that you are familiar with them,

1. Basics of Markdown (not so necessary)
2. Basics of Version Control System i.e. Git and Github
3. Node Modules and Some simple npm commands
4. Some jargons related to domain name and stuff
5. And yeah a little bit of JavaScript

### The Actual Stuff

So I've decided to breakdown this process into 4 phases:

1. Creating the Project

2. Modifying the Project

3. Deploying it to Vercel and setting Custom Domain


With that being said let's get started,

## Phase 1: Creation

So to initialize an Astro project I created a directory in my system named "portfolio-blog" (because that's what the purpose of the website is) then if I'd have gone by the docs then I were to execute following command in my terminal,

```shell
npm create astro@latest
```

But I tried to play a little over smart here, Let me explain. I've already seen an Astro theme named [Dante](https://astro.build/themes/details/dante/) by [JustGoodUI](https://github.com/JustGoodUI), so I just cloned the Dante's [Github Repo](https://github.com/JustGoodUI/dante-astro-theme) by executing following command,

```shell
git clone https://github.com/JustGoodUI/dante-astro-theme .
```

But there's a catch, If I were to clone someone else's repo then I'd have to create a fork on my GitHub and to avoid that I've already created a git repository with some dummy commits and pushed it to my GitHub and then copied content from Dante's repo (except the .git directory) and to install all the dependencies I executed

```shell
npm i
```

And this got my wheel spinning, I was able to start a development server by executing

```shell
npm run dev
```

And the structure of the project looked something like this

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── data/
│   ├── icons/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   └── utils/
├── astro.config.mjs
├── package.json
├── README.md
├── tailwind.config.cjs
└── tsconfig.json
```

And thus the first phase of this blog ends here, now let's delve into the second phase(I swear ChatGPT didn't write this)

## Phase 2: Modification

Oh boy, this was the longest phase of all and I did a hell lot of workarounds and fuckups, so I won't run it past again because if I do so then this blog would become a Colleen Hoover Novel so let me just put it into a nutshell so that I can explain you how content is managed (at least in this particular project),

- All the blogs are stored under the directory src/content/blog as MarkDown(md) files
- All the project are stored under the directory src/content/project as MarkDown(md) files

These MarkDown files are rendered when you go to the route corresponding to it, so I modified them and I added my projects in projects directory and same for the blog.(Yeah this blog as well).

And all the pages that you might stumble across whilst visiting my website (please visit it🥺) are stored under the directory src/content/pages and so I modified them according to my need.

All the assets(images to be precise) are kept in the public directory.

And lastly I modified site-config.ts file from src/data directory where I removed a few objects related to newsletter and categorization because they were overkill for me and I modified some content, added links to my social media handles and modified routes a little so that it would cater my purpose to the fullest. If you want to know more about it then checkout [this commit](https://github.com/ni3rav/portfolio-blog/commit/19411b0e4376b922b3f9337f19ca026faa051307) (I commented out unwanted part instead of purging it out just to stay on safer side lol).

While I was doing all these modifications I was committing changes time to time to my github repo too and so by the end of this phase my project was ready to be deployed.

## Phase 3: Deployment

Since my GitHub repo was already prepared all I had to do was log-in to Vercel with my GitHub account, import the GitHub repo and hit deploy and kaboom my website was live at [ni3rav.vercel.app](https://ni3rav.vercel.app) and then all I was left with is to configure a custom domain so I had already purchased [ni3rav.me](https://ni3rav.me) from NameCheap (Yep I got it from GitHub Student Developer Pack) so all I had to do was configure an A Record (address record, what it does is basically maps my domain name with IPv4 address of the server which is hosting my website) and a CNAME Record (Canonical Name Address, it maps one domain name to other, in my case it maps ni3rav.vercel.app with ni3rav.me).

So yeah that was it, after following these steps my websites was live and now you are able to read this Blog.

### A closing note

Thank you for reading this far, I genuinely appreciate your time and I hope I was able to serve you some value or entertainment through this blog and maybe you've enjoyed reading this blog as much as I enjoyed it writing! If you have any suggestions, queries or anything just hit me up through any mean from [contact page](https://www.ni3rav.me/contact) I am all ears!

_THANK YOU VERY MUCH AND HAVE A GOOD DAY!_