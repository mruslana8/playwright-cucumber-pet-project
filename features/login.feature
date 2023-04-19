Feature: Login action

    As a user
    I want to login into application

    #Scenario Outline: Login with valid credentials
     # Given I visit a login page
     # When I fill the login form with "<username>" and "<password>"
     # Then I should see Inventory page

     # Examples:
      #    | username | password |
       #   | standard_user  | secret_sauce  |
        #  | problem_user  | secret_sauce  |               

    #Scenario Outline: Try to login with invalid credentials
     # Given I visit a login page
      #When I fill the login form with "<username>" and "<password>"
      #Then I should see error: "<error>"

      #Examples:
       #   | username | password | error |
        #  | locked_out_user  | secret_sauce  | Epic sadface: Sorry, this user has been locked out.  |
         # | invalid_username  | invalid_password  | Epic sadface: Username and password do not match any user in this service  |

    #Scenario Outline: Retry login after login with invalid credentials           
     # Given I visit a login page
      #When I fill the login form with "<invalid_username>" and "<invalid_password>"
      #And I should close error message
      #And I fill the login form with "<username>" and "<password>"
      #Then I should see the Home page

      #Examples:
       #   | invalid_username | invalid_password | username | password  |
        #  | wrong_username  | wrong_password  | standard_user  | secret_sauce  |







