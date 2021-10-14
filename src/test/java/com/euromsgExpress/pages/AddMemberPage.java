package com.euromsgExpress.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class AddMemberPage extends BasePage{

    @FindBy(xpath = "//button[@class='btn btn-labeled btn-purple']")
    public WebElement yeniListeOlusturButton;

    @FindBy(xpath = "//input[@class='form-control ng-pristine ng-invalid ng-touched']")
    public WebElement listeyeIsimVer;

    @FindBy(xpath = "//button[contains(.,'Üye Ekle')]")
    public WebElement uyeEkleButton;

    @FindBy(xpath = "//a[.='Form ile Ekle']")
    public WebElement formIleEkleButton;

    @FindBy(xpath = "//input[@id='firstName']")
    public WebElement ad;

    @FindBy(xpath = "//input[@id='lastName']")
    public WebElement soyad;

    @FindBy(xpath = "//input[@id='email']")
    public WebElement email;

    @FindBy(xpath = "//span[@class='fa fa-check']")
    public WebElement onayCheckBox;

    @FindBy(xpath = "//button[@class='btn btn-labeled btn-success']")
    public WebElement kaydetButton;


}
