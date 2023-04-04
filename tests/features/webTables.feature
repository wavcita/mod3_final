@ui-tests2
Feature: Select webTable element into Demoqa

#  Background: Select Elements option in home page
#      Given the user selects the Elements option

@testWeb

Scenario: Select Elements option in home page
    #Given the user selects the Elements option
    Given the user clicks the add button
    And the user sets "Maria Isabel" as First Name
    And the user sets "Cardozo" as Last Name
    And the user sets "isajocabet@gmail.com" as email
    And the user sets "29" age
    And the user sets "4000" as salary
    And the user sets "Cochabamba" as departament
    And the user clicks as Submit button
    #And the user clicks as Edit file button
    # When the user clicks the Login button
    # Then the user should see "app/today" text on the URL