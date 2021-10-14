package com.euromsgExpress.pages;

import com.euromsgExpress.utilities.BrowserUtils;
import com.euromsgExpress.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

    public LoginPage() {
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(xpath = "//a[.='GİRİŞ']")
    public WebElement girisButton;

    @FindBy(xpath = "//input[@name='email']")
    public WebElement emailBox;

    @FindBy(id = "exampleInputPassword1")
    public WebElement passwordBox;

    @FindBy(xpath = "//button[@class='btn btn-block btn-primary mt-3']")
    public WebElement LoginButton;

    @FindBy(xpath = "//div[@class='text-danger text-center']")
    public WebElement didNotMatchWarning;

    @FindBy(xpath = "(//div[@class='input-warning'])[1]")
    public WebElement passwordWarning;

    @FindBy(xpath = "(//div[@class='input-warning'])[2]")
    public WebElement usernameWarning;

    @FindBy(xpath = "//div[@class='text-danger text-center ng-star-inserted']")
    public WebElement notFoundInformation;

    public void login(String username, String password) {
        emailBox.sendKeys(username);
        passwordBox.sendKeys(password);
        BrowserUtils.waitFor(10);
        LoginButton.click();
    }
}
