import { Given,Then,When } from "@cucumber/cucumber";
import { Browser,Page,chromium, expect} from '@playwright/test'
import WpAdminLogin from "../../pages/wp-admin-login";
import CrawlPluginUI from "../../pages/crawl-plugin-ui";

let browser : Browser
let page: Page
let loginPage : WpAdminLogin
let crawlPluginPage : CrawlPluginUI
Given("the user navigates to the {string}", async function (domain: string) {
    console.log(domain);
    browser = await chromium.launch({ headless: false,timeout: 5 * 60 * 1000    })
    const context = await browser.newContext()
    page = await context.newPage()
    loginPage = new WpAdminLogin(page)
    await loginPage.loadLoginPage(domain)
    var title = await loginPage.getTitle();
    expect(title).toMatch(/^Log In.*/);
})
Given("they logs in with the username {string} and password {string}", async function (username: string, password: string){  
    await loginPage.login(username, password)
})

Given('Given the user navigates to the crawler plugin under the tools section',{timeout:10000}, async function () {
    this.crawlPluginPage = await loginPage.loadPluginPage()
    var hasButton = await this.crawlPluginPage.hasCrawlButton()
    await expect(hasButton).toBeTruthy();
  });

  Given('When they click the button {string}', async function (string) {
    await this.crawlPluginPage.startCrawling()
  });

  Then('The page should list URLs in the website', async function () {
    var urls = await this.crawlPluginPage.getCrawledURLs();
    expect(urls.length).toBeGreaterThan(3)
  });