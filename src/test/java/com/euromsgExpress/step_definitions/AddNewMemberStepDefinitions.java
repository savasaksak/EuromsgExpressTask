package com.euromsgExpress.step_definitions;

import com.euromsgExpress.pages.AddMemberPage;
import com.euromsgExpress.pages.DashboardPage;
import com.euromsgExpress.utilities.BrowserUtils;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class AddNewMemberStepDefinitions {

    DashboardPage dashboardPage = new DashboardPage();
    AddMemberPage addMemberPage = new AddMemberPage();

    @When("the user click Üyelerini Ekle option")
    public void the_user_click_Üyelerini_Ekle_option() {
        dashboardPage.uyeleriniEkle.click();
    }



    @When("the user click Yeni Liste Olustur option")
    public void the_user_click_Yeni_Liste_Olustur_option() {
        BrowserUtils.waitForClickability(addMemberPage.yeniListeOlusturButton,5);
        addMemberPage.yeniListeOlusturButton.click();
    }
    @When("the user naming the list")
    public void the_user_naming_the_list() {
        BrowserUtils.waitForClickability(addMemberPage.listeyeIsimVer,10);
        addMemberPage.listeyeIsimVer.sendKeys("liste1");
        addMemberPage.kaydetButton.click();
    }
    @When("the user add new member information")
    public void the_user_add_new_member_information() {
        BrowserUtils.waitForClickability(addMemberPage.uyeEkleButton,5);
        addMemberPage.uyeEkleButton.click();
        addMemberPage.formIleEkleButton.click();
    }
    @Then("Verify that added new member information should seen the in saved tab")
    public void verify_that_added_new_member_information_should_seen_the_in_saved_tab() {
        BrowserUtils.waitForClickability(addMemberPage.ad,5);
        addMemberPage.ad.sendKeys("euro");
        addMemberPage.soyad.sendKeys("msg");
        addMemberPage.soyad.sendKeys("euromsg@gmail.com");
    }
}
