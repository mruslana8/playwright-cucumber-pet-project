Feature: Product page

  Background: 
    When I am logged in

  Scenario: User goes back to Inventory page
    Given I open Product page
    When I click on a Back Button
    Then I return to Inventory Page
  

