package com.euromsgExpress.step_definitions;

import com.euromsgExpress.pages.DashboardPage;
import com.euromsgExpress.pages.LoginPage;
import com.euromsgExpress.utilities.BrowserUtils;
import com.euromsgExpress.utilities.ConfigurationReader;
import com.euromsgExpress.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginStepDefinition {

    LoginPage loginPage = new LoginPage();
    DashboardPage dashboardPage = new DashboardPage();


    @Given("the user in login page")
    public void the_user_in_login_page() {

        String url = ConfigurationReader.get("url");
        Driver.get().get(url);
        BrowserUtils.waitForClickability(loginPage.girisButton, 10);
        loginPage.girisButton.click();
        BrowserUtils.waitForClickability(loginPage.emailBox, 10);

    }


    @When("the user logged in {string} and {string}")
    public void the_user_logged_in_and(String email, String password) throws InterruptedException {

        loginPage.login(email, password);
        Thread.sleep(10000);
    }

    @Then("the user should see the Ana Sayfa")
    public void the_user_should_see_the_Ana_Sayfa() {
        BrowserUtils.waitForClickability(dashboardPage.anaSayfa, 10);
        dashboardPage.anaSayfa.isDisplayed();

    }

    @Then("Verify that username and password did not match warning")
    public void verify_that_username_and_password_did_not_match_warning() {
        loginPage.didNotMatchWarning.isDisplayed();
    }

    @When("the user logged in {string} and {string} and display Warning")
    public void the_user_logged_in_and_and_display_Warning(String username, String password) throws InterruptedException {
        loginPage.emailBox.sendKeys(username);
        loginPage.passwordBox.sendKeys(password);
        Thread.sleep(10000);
        loginPage.LoginButton.click();

        loginPage.notFoundInformation.isDisplayed();
    }

    @When("the user logged in {string} and {string} and display warning")
    public void the_user_logged_in_and_and_display_warning(String username, String passsword) {

        if (username.length() == 0 && passsword.length() != 0) {
            loginPage.passwordBox.sendKeys(passsword);
            loginPage.LoginButton.click();
            loginPage.usernameWarning.isDisplayed();
        } else if (passsword.length() == 0 && username.length() != 0) {
            loginPage.emailBox.sendKeys(username);
            loginPage.LoginButton.click();
            loginPage.passwordWarning.isDisplayed();
        } else if (username.length() == 0 & passsword.length() == 0) {
            loginPage.LoginButton.click();
            loginPage.usernameWarning.isDisplayed();
            loginPage.passwordWarning.isDisplayed();
        }
    }
}
