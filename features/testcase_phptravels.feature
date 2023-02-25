Feature: TestCase 1 PHP Travels

  Scenario Outline: As a user, i login and submit details in form
    Given I open "<pageUrl>" page
     Then I fill the requestform with "<firstname>" "<lastname>" "<businessname>" "<email>"

    Examples:
      | pageUrl                      | firstname | lastname | businessname | email                 | 
      | https://phptravels.com/demo/ |  m        | d        | md           | mahesh.test@gmail.com |

  Scenario: As a user, i submit the form through api
    Given Set url as "https://phptravels.com/"
		 And  Set api path as "hubspot"
     And  Set HEADER param request "content-type" as "multipart/form-data"
		When  Raise "POST" HTTP request for "hubspot"
		Then  Valid HTTP response should be received
	 	 And  Response http code should be "200"
	 	 And  Response BODY should not be null or empty
		 And  Response BODY verification should be successful
     And  Set api path as "demo_email"
     And  Set HEADER param request "content-type" as "multipart/form-data"
		When  Raise "POST" HTTP request for "demo_email"
		Then  Valid HTTP response should be received
	 	 And  Response http code should be "200"
	 	 And  Response BODY should not be null or empty
		 And  Response BODY verification should be successful