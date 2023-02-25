Feature: TestCase 2 SauceLabs 

  Scenario Outline: As a user, i login and submit details in form
    Given I open "<pageUrl>" page
     When I fill the credentials with "<username>" and "<password>" and login
      And I click on "sorting" button
      And I add "saucelabbackpack"
      And I go to cart
      And I click on "continueshoping" button
      And I add "anotheritem"
      And I go to cart
      And I click on "checkout" button
      And I fill address with "<firstname>" "<lastname>" "<zipcode>"
      And I click on "submit" button
      And I click on "finish" button
     Then I should get successful response 

    Examples:
    | pageUrl                    | username      | password     | firstname | lastname | zipcode |
    | https://www.saucedemo.com/ | standard_user | secret_sauce | m         | d        | 123456  |