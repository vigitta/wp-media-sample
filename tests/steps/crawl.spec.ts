import { Given,Then } from "@cucumber/cucumber";
import { Browser,Page,chromium} from '@playwright/test'
import WpAdminLogin from "../../pages/wp-admin-login";

let browser : Browser
let page: Page
let loginPage : WpAdminLogin
Given("the user navigates to the {string}", async function (domain: string) {
    console.log(domain);
    browser = await chromium.launch({ headless: false })
    const context = await browser.newContext()
    page = await context.newPage()
    loginPage = new WpAdminLogin(page);  
    await loginPage.loadLoginPage(domain)
})
Then("logs in with the username {string} and password {string}", async function (username: string, password: string){  
    await loginPage.login(username, password)
})