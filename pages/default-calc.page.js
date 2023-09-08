
const eleUtil = require('../util/elementUtil')
const constVal = require('../constants');
const dynamicPath = require('../util/dynamicEle');
const { browser } = require('@wdio/globals');

class DefaultCalculatorPage{

    // await $( "//a[normalize-space()='Adjust default values']").click()
    // await $("//input[@id='additional-income']").click();
    // await $("//input[@id='additional-income']").setValue("4000");
    // await $("//input[@id='retirement-duration']").click();
    // await $("//input[@id='retirement-duration']").setValue("65");
    // await $("//input[@id='retirement-annual-income']").click();
    // await $("//input[@id='retirement-annual-income']").setValue("65");
    // await $("//input[@id='pre-retirement-roi']").click();
    // await $("//input[@id='pre-retirement-roi']").setValue("65");

    // //input[@id='include-inflation']/..//label[contains(text(),'Yes')]
    // //button[normalize-space()='Save changes']

    // await $("//input[@id='post-retirement-roi']").click();
    // await $("//input[@id='post-retirement-roi']").setValue("65");

    get adjustDefaultValuesLink(){
        return $("//a[normalize-space()='Adjust default values']")
    }

    //What other income will you have during retirement? 
    get defaultCalcAdditionalIncone(){
        return  $("//input[@id='additional-income']")
    }
    //How many years do you plan to depend on retirement income?
    get defaultCalcRetirementDuration(){
        return  $("//input[@id='retirement-duration']")
    }
    get defaultSelectIncludeInflation(){
        return  $("//input[@id='include-inflation']/..//label[contains(text(),'Yes')]") 
    }
    //If yes, what is the expected inflation rate?
    get defaultCalcExpectedInflationRatio(){
        return $("//input[@id='expected-inflation-rate']") 
    }

    //How much of your final annual income do you want available in each year of your retirement?
    get defaultRetirementAnnualIncome(){
        return $("//input[@id='retirement-annual-income']")
    }

    //Pre-retirement investment return
    get defaultCalcPreRetirementRoi(){
        return $("//input[@id='pre-retirement-roi']")
    }
    //Post-retirement investment return
    get defaultCalcPostRetirementRoi(){
        return $("//input[@id='post-retirement-roi']")
    }

    get clickSaveChanges(){
        return $("//button[normalize-space()='Save changes']")
    }


    async inputDefaultCalculatorAndSave(){
        await eleUtil.doClick(this.adjustDefaultValuesLink)
        await eleUtil.doSetvalue(this.defaultCalcAdditionalIncone,100000)
        await eleUtil.doSetvalue(this.defaultCalcRetirementDuration,12)
        await this.selectIncludeInflation("Yes")
        browser.pause(3000)
        await eleUtil.doSetvalue(this.defaultCalcExpectedInflationRatio,3)
        await eleUtil.doSetvalue(this.defaultRetirementAnnualIncome,75)
        await eleUtil.doSetvalue(this.defaultCalcPreRetirementRoi,7)
        await eleUtil.doSetvalue(this.defaultCalcPostRetirementRoi,6)
        await eleUtil.doClick(this.clickSaveChanges)
    }

    async selectIncludeInflation(value){
        await $("//input[@id='include-inflation']/..//label[contains(text(),'"+value+"')]").click();   
    }

    async isDefaultCalculatorValueDisplayed(){
        browser.pause(5000)
        return await $("//*[@id='default-values-modal' and @class='dsgint-modal-card modal fade show']").isDisplayed()
    }





}

module.exports= new DefaultCalculatorPage();