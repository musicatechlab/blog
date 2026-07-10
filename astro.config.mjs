// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// カスタムドメイン (blog.musicatechlab.com) で配信。CNAME は public/CNAME。base は設定しない（ルート配信）。
export default defineConfig({
	site: 'https://blog.musicatechlab.com',
	integrations: [mdx(), sitemap()],
});
