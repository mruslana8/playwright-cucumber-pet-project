Feature: Interaction with cart
    Intercation with cart is possible on 2 pages now: Inventory Page and Product Page

  Background:
    When I am logged in

  Scenario: User adds product to cart from Inventory page
    When I add a product to a cart
    Then I see a product in a cart

  Scenario: User deletes product from a cart from Inventory page
   Given I add a product to a cart
   When I delete a product from a cart
   Then A cart is empty

  Scenario: User adds product to cart from Product page
    Given I open Product Page
    When I add a product to a cart
    Then I see a product in a cart

  Scenario: User deletes product from a cart from Product page
    Given I open Product Page
    Given I add a product to a cart
    When I delete a product from a cart
    Then A cart is empty

  Scenario: User adds product from Inventory and deletes from a cart from Product page
    Given I add a product to a cart
    And I open Product page
    When I delete a product from a cart
    Then A cart is empty

  Scenario: User adds product from Product Page and deletes from a cart from Inventory page
    Given I open Product page
    And I add a product to a cart
    And I open Inventory page
    When I delete a product from a cart
    Then A cart is empty
