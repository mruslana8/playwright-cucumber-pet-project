Feature: All products page

  Background:
    When I am logged in

  Scenario: User adds products to a cart
    Given I open Inventory page 
    When I add a product to a cart
    Then I see a product in a cart

  Scenario: User deletes products from a cart
    Given I open Inventory page
    And I add a product to a cart
    When I delete a product from a cart
    Then A cart is empty
  
  Scenario: User opens a product page by clicking on a product name
    Given I open Inventory page
    When I click on product's name
    Then Product page is open

  Scenario: User opens a product page by clicking on a photo
    Given I open Inventory page
    When I click on product's photo
    Then Product page is open
  
  Scenario: User sees products that sorted by name ascending by default 
    When I open Inventory page
    Then products are sorted by name ascending

  @development
  Scenario: User sorts products in the list by name descending
    Given I open Inventory page
    When I sort products by "<sortBy>" "<typeOfSort>"
    Then products are sorted by "<sortBy>" "<typeOfSort>"

    Examples:
          | sortBy | typeOfSort |
    #      | name  | ascending  |
          | name  | descending  |  
     #     | price  | ascending  |
     #     | price  | descending  |  
  
  # попробоввать сделать один сценарий для сортировки с example outline (еще дописать сортировку по цене)




    

