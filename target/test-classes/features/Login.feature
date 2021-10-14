Feature: Login Functionality



  Scenario: Login with Valid Credential
    Given the user in login page
    When the user logged in "savasaksak@gmail.com" and "Abc123Abc"
    Then the user should see the Ana Sayfa


  Scenario Outline: Login with Invalid Credentials
    Given the user in login page
    When the user logged in "<username>" and "<password>" and display Warning
    Examples:
  | username             | password  |
  | aksaksavas@gmail.com | 123Abc123 |
  | savasaksak@gmail.com | 123Abc123 |
  | aksaksavas@gmail.com | Abc123Abc |


  Scenario Outline: Login with Blank username or password
    Given the user in login page
    When the user logged in "<username>" and "<password>" and display warning
    Examples:
      | username                  | password        |
      | invalidusername@gmail.com |                 |
      |                           | invalidpassword |
      |                           |                 |



