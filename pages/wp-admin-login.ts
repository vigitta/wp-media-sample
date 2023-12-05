import { Page, Locator, expect } from '@playwright/test'
import { assert } from 'console'
import CrawlPluginUI from './crawl-plugin-ui'
export default class WpAdminLogin{
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async login(userName: string, password: string){
        await this.page.locator('#user_login').fill(userName)
        await this.page.locator('#user_pass').fill(password)
        await this.page.locator('#wp-submit').click()
    }
    async loadLoginPage(domain: string){
        await this.page.goto(`http://${domain}/wp-login.php`);

    }
    async getTitle(){
        return await this.page.title();
    }
    async loadPluginPage() {
        await this.page.locator('#menu-tools').click()
        await this.page.locator('a:has-text("WP Crawler admn panel")').click()
        return new CrawlPluginUI(this.page);
    }
}