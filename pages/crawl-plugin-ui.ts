import { Page, Locator, expect } from '@playwright/test'
export default class CrawlPluginUI{
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    
    async startCrawling() {
        await this.page.locator('#wpcrawler-crawl-button').click()
    }
    async hasCrawlButton(){
        return await this.page.locator('button:has-text("Crawl Website")').isVisible
    }
    async getCrawledURLs(){
        await this.page.waitForSelector('#pages-list li');
        const urls = await this.page.$$eval('#pages-list li', (lis: any) => {
            return lis.map((li: any) => li.textContent.trim());
          });

        return urls;
    }
}