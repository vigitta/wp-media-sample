Feature: Wordpress crawler features

The admin user should be able to run and verify the crawler features using the plugin.




Scenario Outline: Execute the crawler plugin "Crawl Website Button" and verify the pages are listed

Given the user navigates to the "<domain>"
Then logs in with the username "<userName>" and password "<password>"


When the user navigates to the crawler plugin under the tools section
And clicks the Clicks the "Start Crawl"

Examples:

|domain|userName|password|
|vigitta.local|vigitta|vigitta@123|