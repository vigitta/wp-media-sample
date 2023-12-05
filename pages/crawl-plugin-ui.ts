import { Page, Locator, expect } from '@playwright/test'
export default class CrawlPluginUI{
    readonly page: Page
    readonly startWebCrawlBtn: Locator
    constructor(page: Page) {
        this.page = page
        this.startWebCrawlBtn = this.page.locator('#wpcrawler-crawl-button')
    }

    async startWebCrawl(){
        await this.startWebCrawlBtn.click();
    }
    
}