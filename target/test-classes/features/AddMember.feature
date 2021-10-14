
Feature: Adding new member


  @wip
  Scenario: User should be able to add a new member
    Given the user in login page
    When the user logged in "savasaksak@gmail.com" and "Abc123Abc"
    Then the user should see the Ana Sayfa
    When the user click Üyelerini Ekle option
    And the user click Yeni Liste Olustur option
    And the user naming the list
    And the user add new member information
    Then Verify that added new member information should seen the in saved tab


