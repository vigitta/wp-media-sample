import { Given,Then,When } from "@cucumber/cucumber";
import { Page, expect} from '@playwright/test'
import WpPageManagerUI from "../../pages/wp-page-manager-ui";
import {ICustomWorld } from "../../support/custom-world";
import WpAdminLogin from "../../pages/wp-admin-login";

let pageManager : WpPageManagerUI
Given('the user navigates to the page management page',async function(this:ICustomWorld) {
    const {page} = this;
    var admin = new WpAdminLogin(page);
    await admin.gotoPageManager();
    var title =await admin.getTitle();
    expect(title).toMatch(/^Add New Page (.*)$/);
});
Given('the user creates a new Wordpress page with title {string}', async function (this: ICustomWorld,pageTitle: string) {
    const { page } = this;
    pageManager = new WpPageManagerUI(page)
    await pageManager.createWordpressPage(pageTitle)
  });

