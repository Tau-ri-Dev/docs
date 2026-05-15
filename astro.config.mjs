// @ts-check
import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro'
import Icons from 'starlight-plugin-icons'
import starlightSidebarTopics from "starlight-sidebar-topics";
import { presetStarlightIcons } from 'starlight-plugin-icons/uno'

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    integrations: [
        UnoCSS(),
        Icons({
            starlight: {
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
                                icon: "i-ph:rocket-launch-duotone",
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
            }
        }),
        //icon()
    ]
});