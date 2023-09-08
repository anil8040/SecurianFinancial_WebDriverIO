# WebDriverIO

***<https://webdriver.io/docs/gettingstarted/>***
***<https://github.com/webdriverio/example-recipes/blob/fc362f2f8dd823d294b9bb5f92bd5991339d4591/wdio.conf.js>***
its a automation testing framework for browser and mobile testing applications

***-- Features --***

- automate webbased applications written in React ,Vue,Angular etc
- native desktop applications written in Electron.Js
- can work with shadown DOM and React Objects
    -- this is the major advantages
***-- Setup WebDriverIO--***
- npm init -y
    -- this command will start the node project using this ,where it add all the default folders and package.json file
- npm init wdio
    -- this command will initialize the node project and also start the webDriverIO setup
**--    Folder Structure of WebDriverIO --**
- test :
  - Under test folder there are two folder pageObjects and spec folder
  - In Page Objects folder we will store all the objects and data inside each and every page
  - In Spec folder we will store the test cases created
- wdio.config.js - this is where all the configurations related the theproject are stored
  - it store the specs for each test case, we can exclude test cases from running
  - we can update the no of instances from running the tests
  - we can update the capabilities,timeouts,loglevels,reports
**Commands**
some of the commands used in webdriverIO
- npm ls webdriverIO - optional to check the version of the webdriverIO
- npx wdio run wdio.config.js or npm run wdio - these are the two options where we can use to run the test scripts
  - we use npx commands to run the npm test in local folder
    - before running the scripts please make sure the chromedriver and webdriverIO are in sync( the version should be compatible)
- npm run wdio - is configured at run from the package.json file
- **- $() -** - Single dollar sign to find a single webElement
- **- $$() -** - Double dollar sign to find multiple webElements
**-Generate and View Allure Reports-**
- npm install @wdio/allure-reporter --save-dev
- Add reporter config in wdio.conf.js (Be default it will setup if you have opted allure)
- Run test and check if allure results folder is generated
- install allure command line tool sudo npm i -g allure-commandline --save-dev
- please make sure to install the command line globally
- Run commands
  - allure generate allure-results // this will generage allure-report folder
  - allure open //this will start server and open report
  