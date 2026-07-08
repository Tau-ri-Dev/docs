// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from "starlight-sidebar-topics";
import rehypeExternalLinks from 'rehype-external-links';
import starlightImageZoom from 'starlight-image-zoom'
import remarkGfm from 'remark-gfm';


const prod = process.env.NODE_ENV === "production";

export default defineConfig({
    site: prod ? "https://docs.tauridev.eu" : undefined,
    markdown: {
        remarkPlugins: [
            [remarkGfm, { gfm: true }]
        ],
        rehypePlugins: [[rehypeExternalLinks, { target: '_blank', rel: [] }]],
    },
    integrations: [
        starlight({
            favicon: '/assets/favicon.png',
            title: 'Tau\'ri Dev Docs',
            description: 'Home of documentations for all Tau\'ri Dev projects. Check out how to build stargates with JSG mod, use Transport Rings with JSG: Rings and Additions or play cool music with Redstone Jukeboxes Mod!',
            head: [
                { tag: "meta", attrs: { charset: "URF-8" } },
                { tag: "link", attrs: { rel: "manifest", href: "/manifest.json" } },

                // meta tags
                { tag: "meta", attrs: { name: "author", content: "Tau'ri Dev" } },

                // color scheme
                { tag: "meta", attrs: { name: "theme-color", content: "#ffffff" } },
                { tag: "meta", attrs: { name: "msapplication-navbutton-color", content: "#ffffff" } },
                { tag: "meta", attrs: { name: "apple-mobile-web-app-status-bar-style", content: "#ffffff" } },

                // open graph
                { tag: "meta", attrs: { property: "og:type", content: "website" } },
                { tag: "meta", attrs: { property: "og:url", content: "https://docs.tauridev.eu" } },
                { tag: "meta", attrs: { property: "og:image", content: "https://docs.tauridev.eu/assets/favicon.png" } },

                { tag: "meta", attrs: { property: "twitter:card", content: "summary_large_image" } },
                { tag: "meta", attrs: { property: "twitter:url", content: "https://docs.tauridev.eu" } },
                { tag: "meta", attrs: { property: "twitter:image", content: "https://docs.tauridev.eu/assets/favicon.png" } },

                // scripts
                {
                    tag: 'script',
                    attrs: {
                        async: true,
                        src: 'https://www.googletagmanager.com/gtag/js?id=G-11VK33EGCR',
                    },
                }, {
                    tag: 'script',
                    content: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-11VK33EGCR'); 
                    `,
                },
            ],
            editLink: {
                baseUrl: 'https://github.com/Tau-ri-Dev/docs/edit/main/',
            },
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
                Footer: './src/components/overrides/Footer.astro'
                //Sidebar: "@astrojs/starlight/components/Sidebar.astro"
            },
            plugins: [
                starlightImageZoom(),
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
                                        },
                                        {
                                            label: 'Advancements',
                                            items: [{ autogenerate: { directory: 'jsg/data/advancements' } }],
                                        },
                                        {
                                            label: 'Loot tables',
                                            items: [{ autogenerate: { directory: 'jsg/data/loot-tables' } }],
                                        },
                                        {
                                            label: 'World generation',
                                            items: [
                                                {
                                                    label: 'Structures',
                                                    items: [{ autogenerate: { directory: 'jsg/data/worldgen/structures' } }],
                                                },
                                                {
                                                    label: 'Template pools',
                                                    items: [{ autogenerate: { directory: 'jsg/data/worldgen/template-pools' } }],
                                                }
                                            ]
                                        }
                                    ],
                                },
                                {
                                    label: 'Stargates',
                                    items: [
                                        { autogenerate: { directory: 'jsg/stargates' } },
                                        {
                                            label: 'Glyphs',
                                            items: [{ autogenerate: { directory: 'jsg/stargates_glyphs' } }],
                                        }
                                    ],
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
                                    label: 'Compatibility',
                                    items: [{ autogenerate: { directory: 'jsg/compatibility' } }],
                                },
                                {
                                    label: 'Download',
                                    items: [{ autogenerate: { directory: 'jsg/download' } }],
                                },
                                {
                                    label: 'For Developers',
                                    items: [{ autogenerate: { directory: 'jsg/for-developers' } }],
                                }
                            ],
                        },
                        {
                            id: 'jsg-core',
                            label: 'JSG: Core',
                            link: '/jsg-core/',
                            icon: "setting",
                            items: [
                                {
                                    label: 'Standalone Core',
                                    link: "/jsg-core/standalone/",
                                },
                                {
                                    label: 'Configuration',
                                    items: [{ autogenerate: { directory: 'jsg-core/configuration' } }],
                                },
                                {
                                    label: 'For Developers',
                                    items: [
                                        { label: "Overview", slug: "jsg-core/for-developers" },
                                        { label: "Getting started", items: [{ autogenerate: { directory: 'jsg-core/for-developers/getting-started' } }] },
                                        { label: "Helpers", items: [{ autogenerate: { directory: 'jsg-core/for-developers/helpers' } }] },
                                        {
                                            label: "Client",
                                            items: [
                                                { label: "Renderer", items: [{ autogenerate: { directory: 'jsg-core/for-developers/client/renderer' } }] }
                                            ]
                                        }
                                    ],
                                }
                            ],
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
