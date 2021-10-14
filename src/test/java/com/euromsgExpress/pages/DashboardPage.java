package com.euromsgExpress.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class DashboardPage extends BasePage {

    @FindBy(css = "[route='/home'] > span")
    public WebElement anaSayfa;

    @FindBy(xpath = "//h4[.='Üyelerini Ekle']")
    public WebElement uyeleriniEkle;
}
