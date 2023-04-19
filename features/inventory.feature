Feature: All products page

  Background:
    When I am logged in

  #Scenario: User adds products to a cart
  #  When I add a product to a cart
  #  Then I see a product in a cart

 # Scenario: User deletes products from a cart
  #  Given I add a product to a cart
  #  When I delete a product from a cart
  #  Then A cart is empty
  
  Scenario: User opens a product page by clicking on a product name
    When I click on product's name
    Then Product page is open

  Scenario: User opens a product page by clicking on a photo
    When I click on product's photo
    Then Product page is open



    

