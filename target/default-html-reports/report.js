$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/AddMember.feature");
formatter.feature({
  "name": "Adding new member",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User should be able to add a new member",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.euromsgExpress.step_definitions.LoginStepDefinition.the_user_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in \"savasaksak@gmail.com\" and \"Abc123Abc\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.euromsgExpress.step_definitions.LoginStepDefinition.the_user_logged_in_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see the Ana Sayfa",
  "keyword": "Then "
});
formatter.match({
  "location": "com.euromsgExpress.step_definitions.LoginStepDefinition.the_user_should_see_the_Ana_Sayfa()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click Üyelerini Ekle option",
  "keyword": "When "
});
formatter.match({
  "location": "com.euromsgExpress.step_definitions.AddNewMemberStepDefinitions.the_user_click_Üyelerini_Ekle_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click Yeni Liste Olustur option",
  "keyword": "And "
});
formatter.match({
  "location": "com.euromsgExpress.step_definitions.AddNewMemberStepDefinitions.the_user_click_Yeni_Liste_Olustur_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user naming the list",
  "keyword": "And "
});
formatter.match({
  "location": "com.euromsgExpress.step_definitions.AddNewMemberStepDefinitions.the_user_naming_the_list()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: Proxy element for: DefaultElementLocator \u0027By.xpath: //input[@class\u003d\u0027form-control ng-pristine ng-invalid ng-touched\u0027]\u0027 (tried for 10 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.euromsgExpress.utilities.BrowserUtils.waitForClickability(BrowserUtils.java:19)\r\n\tat com.euromsgExpress.step_definitions.AddNewMemberStepDefinitions.the_user_naming_the_list(AddNewMemberStepDefinitions.java:28)\r\n\tat ✽.the user naming the list(file:///C:/Users/LENOVO/IdeaProjects/EuromsgExpressTask/src/test/resources/features/AddMember.feature:12)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@class\u003d\u0027form-control ng-pristine ng-invalid ng-touched\u0027]\"}\n  (Session info: chrome\u003d94.0.4606.81)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-LLGCT0B\u0027, ip: \u0027192.168.1.32\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 94.0.4606.81, chrome: {chromedriverVersion: 94.0.4606.61 (418b78f5838ed..., userDataDir: C:\\Users\\LENOVO\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:62206}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: df769f9440bcc6f8dffbb5279ff415b4\n*** Element info: {Using\u003dxpath, value\u003d//input[@class\u003d\u0027form-control ng-pristine ng-invalid ng-touched\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:670)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:666)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat com.euromsgExpress.utilities.BrowserUtils.waitForClickability(BrowserUtils.java:19)\r\n\tat com.euromsgExpress.step_definitions.AddNewMemberStepDefinitions.the_user_naming_the_list(AddNewMemberStepDefinitions.java:28)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the user add new member information",
  "keyword": "And "
});
formatter.match({
  "location": "com.euromsgExpress.step_definitions.AddNewMemberStepDefinitions.the_user_add_new_member_information()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify that added new member information should seen the in saved tab",
  "keyword": "Then "
});
formatter.match({
  "location": "com.euromsgExpress.step_definitions.AddNewMemberStepDefinitions.verify_that_added_new_member_information_should_seen_the_in_saved_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
});