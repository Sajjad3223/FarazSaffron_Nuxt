export interface SitemapData{
    products:SitemapDto[];
    catregories:SitemapDto[];
}

export interface SitemapDto{
    slug:string;
    lastMod:Date;
}