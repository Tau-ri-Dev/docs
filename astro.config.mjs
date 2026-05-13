// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'Tau\'ri Dev Docs',
        social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
        defaultLocale: 'root',
        locales: {
            root: {
                label: 'English',
                lang: 'en'
            }
        },
        components: {
            PageFrame: "./src/components/overrides/PageFrame.astro",
        },
        sidebar: [
            {
                label: 'Just Stargate Mod',
                items: [
                    { slug: 'jsg', badge: { text: 'New' } },
                    'jsg/f'
                ]
            }
        ],
    }), icon()],
});