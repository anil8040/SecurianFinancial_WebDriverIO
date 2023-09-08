//const LoginPage = require("../pageobjects/login.page");
import { browser } from "@wdio/globals";
import { assert, expect as chaiExpect, expect } from "chai";



const mainPage = require('../../pages/main.page')
const preRetire = require('../../pages/pre-retire.page')
const defaultCalc = require('../../pages/default-calc.page')

describe("Securion Financial Test Scenarios : ", () => {
  beforeEach("login to Securion applications", async () => {
    await browser.pause(5000)
    await browser.url('/insights-tools/retirement-calculator.html');
    await browser.maximizeWindow();
    const pageTitle = await preRetire.getPageTitle()
    console.log("Page Title is : " + pageTitle)
    const urlText = await browser.getUrl();
    chaiExpect(urlText).to.be.include("/retirement-calculator");
  });


  it("SF -Validate All required Feilds", async () => {

    await preRetire.doFillAllRequiredFeilds("Yes","Married");
    await preRetire.clickCalculateRetirement()
    const resp = await preRetire.calculatedResponse()
    console.log("response Calculations : "+ resp)
    chaiExpect(resp).to.contain("Congratulations! You are exceeding your retirement goals")
  });
  it("SF -Validate Social Security Feild Additional feilds displayed when set to Yes", async () => {

    const response = await preRetire.validateWhenSocialSecurityisSetToYESORNO("Yes")
    chaiExpect(response).to.be.true


  });
  it("SF -Validate Social Security Feild Additional feilds NOT displayed when set to No", async() => {
    const response = await preRetire.validateWhenSocialSecurityisSetToYESORNO("No")
    chaiExpect(response).to.be.false
  });
  
  it("SF -Validate Default calculator", async() => {

    await defaultCalc.inputDefaultCalculatorAndSave()
    const response = await defaultCalc.isDefaultCalculatorValueDisplayed()
    chaiExpect(response).to.be.false
  });

  it("Validate End 2 End Scenario", async() => {

    await preRetire.doFillAllRequiredFeilds("No","Married");
    await defaultCalc.inputDefaultCalculatorAndSave()
    browser.pause(3000)
    await preRetire.clickCalculateRetirement()
    const resp = await preRetire.calculatedResponse()
    console.log("response Calculations : "+ resp)
    chaiExpect(resp).to.contain("Congratulations! You are exceeding your retirement goals")

  });
});
