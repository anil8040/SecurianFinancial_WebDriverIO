const { browser } = require("@wdio/globals");
const constants = require('../constants')

class eleUtil{

    async doClick(element){
        await element.scrollIntoView({block:'center',inline:'center'})
        await element.waitForDisplayed();
        await element.click();
    }
    async doSetvalue(element,value){
        browser.pause(5000)
        await element.waitForDisplayed()
        await element.scrollIntoView({block:'center',inline:'center'})
        await element.click();
        await element.setValue(value)
    }
    async doGetText(element){
        await element.waitForDisplayed()
        return await element.getText()
    }
    async doGetPageTitle(pageTitle){
        await browser.waitUntil(async ()=>{return await browser.getTitle()==pageTitle},10000,'title is not Displayed after given time interval')
        return await browser.getTitle();
    }

    async doCheckIsRadioBtnDisplayed(element){
       return await element.isDisplayed();
    }
    // async doRadioButtonSelected(element,value){
    //     const ele = element.replace('value',value);
    //     await ele.waitForDisplayed()
     
    //     return await ele.isSelected()? "yes Radio Button is selected" : "No its not Selected" 
    // }

    async validateCalculatedResponse(element){
        await element.waitForDisplayed()
        return await element.getText()
    }




}


module.exports = new eleUtil();