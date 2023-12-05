import { Given,Then,When } from "@cucumber/cucumber";
import { Browser,Page,chromium, expect} from '@playwright/test'
import WpAdminLogin from "../../pages/wp-admin-login";
import CrawlPluginUI from "../../pages/crawl-plugin-ui";
import { ICustomWorld } from "../../support/custom-world";

let browser : Browser
let page: Page
let loginPage : WpAdminLogin
let crawlPluginPage : CrawlPluginUI
Given("the user navigates to the {string}", async function (this: ICustomWorld, domain: string) {
    const { page } = this;
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
    expect(urls.length).toBeGreaterThan(0)
  });

  Then('the page should list the URLs in the website with the one that has the url {string}', async function (pagetitle:string) {
    var urls = await this.crawlPluginPage.getCrawledURLs();
    var anyMatches = doesTextMatchAnyURL(pagetitle, urls)
    expect(urls.length).toBeTruthy();
    
  });
  function doesTextMatchAnyURL(text: string, urls: string[]): boolean {
    for (const url of urls) {
        const regex = new RegExp(url, 'i');
        if (regex.test(text)) {
          return true;
        }
      }
      
      return false;
    }