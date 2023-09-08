const eleUtil = require('../util/elementUtil')
const constVal = require('../constants');
const dynamicPath = require('../util/dynamicEle');
const { browser } = require('@wdio/globals');

class preRetirementPage{


    socialSecurityBenefitsVal ="Yes"
     MartialStatusVal = "Married"
    // await $("#current-age").setValue("40");
    // await $("#retirement-age").setValue("68");
    // await $("#current-income").click()
    // await $("#current-income").addValue(100000);
    // await $("#spouse-income").click()
    // await $("#spouse-income").addValue(75000);
    // await $("//input[@id='current-total-savings']").click()
    // await $("//input[@id='current-total-savings']").addValue(500000);
    // await $("//input[@id='current-annual-savings']").setValue("30");
    // await $("#savings-increase-rate").setValue("2");

    //What is your current age?
    get  currentAge(){
        return  $("#current-age")
    }
    //At what age do you plan to retire?
    get retirementAge(){
        return  $("#retirement-age")
    }

    //What is your current annual income?
    get currentAnnualIncome(){
        return  $("#current-income")
    }
    //What is your spouse's annual income?
    get spouseAnnualIncome(){
        return  $("#spouse-income")
    }
    //What is your current retirement savings balance?
    get currentTotalSavings(){
        return  $("//input[@id='current-total-savings']")
    }
    //How much are you currently saving each year for retirement?
    get currentAnnualSavings(){
        return $("//input[@id='current-annual-savings']")
    }
    //What is the rate of increase in your savings each year? 
    get savingsIncreaseRate(){
        return  $("#savings-increase-rate")
    }
    //Should we include Social Security benefits?
    get selectSocialsecuritybenefits(){
        return $("//input[@name='social-security-benefits']/../label[text()='"+this.socialSecurityBenefitsVal+"']")
    }
    //What is your marital status?
    get selectMartialStatus(){
        return $("//input[@name='marital-status']/../label[text()='"+this.MartialStatusVal+"']")
    }
    //Social Security override amount 
    get socialSecurityOverride(){
        return $("//input[@id='social-security-override']")
    }

    get clickOnCalculate(){
        return  $("//button[normalize-space()='Calculate']")
    }

    get getCalculatedResponse(){
        return $("//p[@id='result-message']")
    }

    // await $("//button[normalize-space()='Calculate']").click();

    //page Actions
    getPageTitle(){
       return eleUtil.doGetPageTitle(constVal.LOGIN_PAGE_TITLE)

    }

    async doFillAllRequiredFeilds(Socialsecuritybenefits,MartialStatus){
        await eleUtil.doSetvalue(this.currentAge,constVal.Current_Age)
        await eleUtil.doSetvalue(this.retirementAge,constVal.Retirement_Age)
        await eleUtil.doSetvalue(this.currentAnnualIncome,constVal.Current_annual_income)
        await  eleUtil.doSetvalue(this.spouseAnnualIncome,constVal.Current_annual_income)
        await eleUtil.doSetvalue(this.currentTotalSavings,constVal.Current_retirement_savings)
        await eleUtil.doSetvalue(this.currentAnnualSavings,constVal.Percent_of_final_annual_income_desired)
        await eleUtil.doSetvalue(this.savingsIncreaseRate,constVal.Annual_retirement_contribution_increase)
      //  await eleUtil.doRadioButtonSelected(this.selectSocialsecuritybenefits,'Yes')
        await this.selectSocialsecuritybenefits(Socialsecuritybenefits)
        if(Socialsecuritybenefits!=='No'){
            await this.selectMartialStatus(MartialStatus)
            await eleUtil.doSetvalue(this.socialSecurityOverride,constVal.Social_Security_Override)
        }
      
   
        //await eleUtil.doRadioButtonSelected(this.selectMartialStatus,'Married')
    }

    async clickCalculateRetirement(){
        browser.pause(3000)
        await eleUtil.doClick(this.clickOnCalculate)
    }

    async scrollToViewPage(){
        browser.pause(3000)
        $("//h2[normalize-space()='Pre-retirement calculator']").scrollIntoView({block:'center',inline:'center'})
    }


    async validateWhenSocialSecurityisSetToYESORNO(Socialsecuritybenefits){

        await this.selectSocialsecuritybenefits(Socialsecuritybenefits)
         const IsMartialStatusEleVisible= await eleUtil.doCheckIsRadioBtnDisplayed($("//input[@name='marital-status']/../label[text()='Married']"))
         const IsSocialSecurityOverrideEleVisible= await eleUtil.doCheckIsRadioBtnDisplayed(this.socialSecurityOverride)
        return IsMartialStatusEleVisible && IsSocialSecurityOverrideEleVisible
    }

    calculatedResponse(){
        return eleUtil.validateCalculatedResponse(this.getCalculatedResponse)
    }
   async selectSocialsecuritybenefits(value){
     await $("//input[@name='social-security-benefits']/../label[text()='"+value+"']").click()
    }

    async selectMartialStatus(value){
        $("//input[@name='marital-status']/../label[text()='"+value+"']").click()
    }

    // $("//input[@name='social-security-benefits']/../label[text()='Yes']").scrollIntoView({block:'center',inline:'center'});
    //   const ele =await $("//input[@name='social-security-benefits']/../label[text()='Yes']")
    //   browser.pause(10000);
    //   await ele.waitForClickable({timeout:10000})
    //   await $("//input[@name='social-security-benefits']/../label[text()='Yes']").click();
    //   await $("//input[@name='marital-status']/../label[text()='Married']").click();
    //   await $("//input[@id='social-security-override']").click();
    //   await $("//input[@id='social-security-override']").setValue("4000");

    //result validation 
    //p[@id='result-message']




}


module.exports = new preRetirementPage();