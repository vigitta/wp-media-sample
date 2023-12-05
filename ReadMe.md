
This readme provides information on the automated test suite for the proposed solution using TypeScript, Playwright, and Cucumber. The objective is to test the functionality of the back-end admin page plugin `wp-crawler-wpp-plugin` for WordPress, specifically focusing on the crawl task.

To run the automated scripts,

- Open a terminal and cd to the working directory
- Run `npm i`
- Run `npm run test`

To adjust the parameters such as the domain name of the wordpress instance, open the `.feature` file in the `/features/` directory and adjust the examples.

The headless mode can be turned off by setting the headless value to `false` in config.ts file.