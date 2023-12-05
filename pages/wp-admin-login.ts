import { Page, Locator, expect } from '@playwright/test'
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
        await this.page.goto(`http://${domain}/wp-admin`);

    }
}