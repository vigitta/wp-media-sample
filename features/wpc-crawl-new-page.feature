Feature: Wordpress crawler features

Admin should be able to create a new page and the crawler should list the new page in the results

Scenario Outline: Create a new Wordpress page and verify the URL is listed in the crawler plugin output.

Given the user navigates to the "<domain>"
Given they logs in with the username "<userName>" and password "<password>"
Given the user navigates to the page management page
Given the user creates a new Wordpress page with title "<page-title>"
And Given the user navigates to the crawler plugin under the tools section
And When they click the button "Crawl Website"
Then the page should list the URLs in the website with the one that has the url "<page-title>"

Examples:

|domain|userName|password|page-title|
|vigitta.local|vigitta|vigitta@123|careers|