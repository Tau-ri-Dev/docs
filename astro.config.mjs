// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from "starlight-sidebar-topics";
import rehypeExternalLinks from 'rehype-external-links';


const prod = process.env.NODE_ENV === "production";

export default defineConfig({
    site: prod ? "https://docs.justsgmod.eu" : undefined,
    markdown: {
        rehypePlugins: [[rehypeExternalLinks, { target: '_blank', rel: [] }]],
    },
    integrations: [
        starlight({
            favicon: '/assets/favicon.png',
            title: 'Tau\'ri Dev Docs',
            logo: {
                light: '/src/assets/tauri_logo_dark.webp',
                dark: '/src/assets/tauri_logo.webp',
                replacesTitle: false,
            },
            social: [
                { icon: 'discord', label: 'Discord', href: 'https://discord.justsgmod.eu/' },
                { icon: 'github', label: 'GitHub', href: 'https://github.com/Tau-ri-Dev' }
            ],
            defaultLocale: 'root',
            locales: {
                root: {
                    label: 'English',
                    lang: 'en'
                }
            },
            customCss: [
                "@fontsource/poppins/400.css",
                // "@fontsource/poppins/600.css", // see src/styles/custom.css
                "@fontsource/jetbrains-mono/400.css",
                "@fontsource/jetbrains-mono/600.css",
                "./src/styles/custom.css",
            ],
            components: {
                PageFrame: "./src/components/overrides/PageFrame.astro",
                Sidebar: "./src/components/overrides/Sidebar.astro",
                //Sidebar: "@astrojs/starlight/components/Sidebar.astro",
            },
            plugins: [
                starlightSidebarTopics(
                    [
                        {
                            id: 'jsg',
                            label: 'Just Stargate Mod',
                            link: '/jsg/',
                            icon: "chevron",
                            items: [
                                "jsg",
                                {
                                    label: 'Getting started',
                                    items: [{ autogenerate: { directory: 'jsg/getting-started' } }],
                                },
                                {
                                    label: 'Configuration',
                                    items: [{ autogenerate: { directory: 'jsg/configuration' } }],
                                },
                                {
                                    label: 'Data',
                                    items: [
                                        {
                                            label: 'Tags',
                                            items: [{ autogenerate: { directory: 'jsg/data/tags' } }],
                                        }
                                    ],
                                },
                                {
                                    label: 'Stargates',
                                    items: [{ autogenerate: { directory: 'jsg/stargates' } }],
                                },
                                {
                                    label: 'Energy',
                                    items: [{ autogenerate: { directory: 'jsg/energy' } }],
                                },
                                {
                                    label: 'Machines',
                                    items: [{ autogenerate: { directory: 'jsg/machines' } }],
                                },
                                {
                                    label: 'Dimensions',
                                    items: [{ autogenerate: { directory: 'jsg/dimensions' } }],
                                },
                                {
                                    label: 'Mobs',
                                    items: [{ autogenerate: { directory: 'jsg/mobs' } }],
                                },
                                {
                                    label: 'CC: Tweaked',
                                    items: [{ autogenerate: { directory: 'jsg/computercraft' } }],
                                },
                                {
                                    label: 'OpenComputers II',
                                    items: [{ autogenerate: { directory: 'jsg/opencomputers' } }],
                                },
                                {
                                    label: 'Depending on JSG',
                                    items: [{ autogenerate: { directory: 'jsg/depending' } }],
                                },
                                {
                                    label: 'Compatibility',
                                    items: [{ autogenerate: { directory: 'jsg/compatibility' } }],
                                },
                                {
                                    label: 'Download',
                                    items: [{ autogenerate: { directory: 'jsg/download' } }],
                                }
                            ],
                        },
                        {
                            id: 'jsg-core',
                            label: 'JSG: Core',
                            link: '/jsg-core/',
                            icon: "setting",
                            items: [],
                        },
                        {
                            id: 'jsg-rings',
                            label: 'JSG: Rings and Transporters',
                            link: '/jsg-rings/',
                            icon: "bars",
                            items: [],
                        },
                        {
                            id: 'jsg-destiny',
                            label: 'JSG: Destiny',
                            link: '/jsg-destiny/',
                            icon: "rocket",
                            items: [],
                        },
                        {
                            id: 'jsg-decor',
                            label: 'JSG: Decor',
                            link: '/jsg-decor/',
                            icon: "puzzle",
                            items: [],
                        },
                        {
                            id: 'rsj',
                            label: 'Redstone Jukeboxes',
                            link: '/rsj/',
                            icon: "puzzle",
                            items: [],
                        },
                        {
                            id: 'jsg12',
                            label: 'JSG - 1.12.2',
                            link: '/jsg12/',
                            icon: "chevron",
                            badge: { text: 'Outdated', variant: 'default' },
                            items: [
                                "jsg12",
                                {
                                    label: 'Getting started',
                                    items: [{ autogenerate: { directory: 'jsg12/getting-started' } }]
                                }
                            ],
                        },
                    ],
                    {
                        exclude: ['/'],
                    }
                )
            ]
        })
    ]
});
