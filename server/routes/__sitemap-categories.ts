import type {SitemapData} from "~/models/sitemapData";
import {BASE_URL} from "~/utilities/api.config";

export default defineSitemapEventHandler(async () => {
    const posts = await $fetch<SitemapData>(`${BASE_URL}/Sitemap`);
    return posts.catregories.map((s) => {
        return {
            loc: "/market?categories=" + s.slug,
            lastmod: new Date(s.lastMod).toJSON().slice(0,10),
        };
    });
});