@ui-tests3
Feature: Select form element into Demoqa

#  Background: Select Elements option in home page
#      Given the user selects the Elements option

@testForm

Scenario: Select Elements option form

    Given the user clicks the add button form
    And the user sets "Carly" as First Name form
    And the user sets "Blanco" as Last Name form
    And the user sets "wavcita@hotmail.com" as email form
    And the user sets "1234567890" as phone form
    #And the user sets "12 Apr 2022" as as subjects
    #And the user sets "La Paz" as as subjects
    #And the user sets "haryana" as address form
    #And I click the submit2 button
    #And the user clicks as Submit button form