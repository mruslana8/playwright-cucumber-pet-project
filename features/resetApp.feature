Feature: Reset Status of an application

  User delete all products from a cart

  Scenario: User reset application status
    Given I am logged in
    Given I open Inventory page
    When I add a product to a cart
    And I see a product in a cart
    And I open navbar
    And I click on ResetApp Button
    Then Cart is empty