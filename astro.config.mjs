// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from "starlight-sidebar-topics";

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'Tau\'ri Dev Docs',
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
                                {
                                    label: '1.20.x',
                                    items: [
                                        {
                                            label: 'Getting started',
                                            items: [
                                                "jsg/1-20-x/getting-started/instalation"
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