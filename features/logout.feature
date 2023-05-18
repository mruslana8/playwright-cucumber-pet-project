Feature: Logout

  Scenario: User logs out
    Given I am logged in
    When I open navbar
    And I click on Logout Button
    Then I am logged out