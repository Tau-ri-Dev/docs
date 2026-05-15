import fs from 'node:fs/promises'
import { defineConfig, presetIcons } from 'unocss'
import { presetStarlightIcons } from 'starlight-plugin-icons/uno'

export default defineConfig({
	presets: [
		presetStarlightIcons(),
		presetIcons({
			collections: {
				icons: {
					chevron: () => fs.readFile('./src/icons/chevron.svg', 'utf-8'),
				},
			},
			extraProperties: { display: 'inline-block', 'vertical-align': 'middle' },
			customizations: {
				iconCustomizer(collection, icon, props) {
					if (collection === 'icons' && icon === 'drizzle')
						props.transform = 'scale(0.8)'
				},
			},
		}),
	]
})