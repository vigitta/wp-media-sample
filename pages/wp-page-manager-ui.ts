import { Page, Locator, expect } from '@playwright/test'
import { assert } from 'console'
export default class WpPageManagerUI{
    readonly page?: Page

    constructor(page?: Page) {
        this.page = page
    }

    async createWordpressPage(pageTitle: string){
        if((await this.page?.$('button.components-button[aria-label="Close"]'))?.isVisible){
            (await this.page?.$('button.components-button[aria-label="Close"]'))?.click()
        }
        await this.page?.keyboard.press("Control+Shift+Alt+M")
        //Toggles the code editor
        await this.page?.locator('h1.wp-block-post-title').fill(pageTitle)
        await this.page?.locator('button.editor-post-publish-button__button:has-text("Publish")').click();
        if(await this.page?.getByLabel('Editor publish').getByRole('button', { name: 'Publish', exact: true }).isVisible){
            await this.page?.getByLabel('Editor publish').getByRole('button', { name: 'Publish', exact: true }).click();
        }
    }
    

}