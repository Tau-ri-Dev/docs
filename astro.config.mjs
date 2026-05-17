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
            favicon: '/src/assets/favicon.png',
            title: 'Tau\'ri Dev Docs',
            logo: {
                light: '/src/assets/tauri_logo_dark.webp',
                dark: '/src/assets/tauri_logo.webp',
                replacesTitle: false,
            },
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
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
                                    label: '1.20.x',
                                    items: [
                                        {
                                            label: 'Getting started',
                                            items: [{ autogenerate: { directory: 'jsg/1-20-x/getting-started' } }],
                                        }
                                    ],
                                },
                                {
                                    label: '1.12.2',
                                    items: [
                                        {
                                            label: 'Getting started',
                                            items: [
                                                "jsg/1-12-2/getting-started/installation"
                                            ],
                                        }
                                    ],
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
