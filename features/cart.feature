Feature: Interaction with cart
    Interaction with cart is possible on 2 pages now: Inventory Page and Product Page

  Background:
    When I am logged in
    
  Scenario: User adds product to cart from Inventory page
    Given I open Inventory page
    When I add a product to a cart
    Then I see a product in a cart
    And Remove From Cart Button is available

  Scenario: User deletes product from a cart from Inventory page
   Given I open Inventory page
   When I add a product to a cart
   And I delete a product from a cart
   Then Cart is empty

  Scenario: User adds product to cart from Product page
    Given I open Product Page
    When I add a product to a cart
    Then I see a product in a cart

  Scenario: User deletes product from a cart from Product page
    Given I open Product Page
    Given I add a product to a cart
    When I delete a product from a cart
    Then Cart is empty

  Scenario: User adds product from Inventory page and deletes from a cart from Product page
    Given I open Inventory page
    When I add a product to a cart
    And I open Product page
    And I delete a product from a cart
    Then Cart is empty

  Scenario: User adds product from Product Page and deletes from a cart from Inventory page
    Given I open Product page
    When I add a product to a cart
    And I open Inventory page
    And I delete a product from a cart
    Then Cart is empty

  @skip
  Scenario: User resets App state
    Given I open Inventory page
    When I add a product to a cart
    And I reset App state
    Then Cart is empty
    And Add to Cart Button is available
 