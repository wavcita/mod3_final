# Install Cucumber JS allure
# https://www.npmjs.com/package/allure-cucumberjs
# https://github.com/allure-framework/allure-js
# https://github.com/allure-framework/allure-js/blob/master/packages/allure-cucumberjs/README.md

# Feature: First Test

# Scenario: Breaker guesses a word
#   Given the Maker has chosen a word
#   When the Breaker makes a guess
#   Then the Maker is asked to score

@ui-tests3
Feature: Select form element into Demoqa

#  Background: Select Elements option in home page
#      Given the user selects the Elements option

@testForm

Scenario: Select Elements option in home page

    Given the user clicks the add button form
    And the user sets "Carly" as First Name form
    And the user sets "Blanco" as Last Name form
    And the user sets "wavcita@hotmail.com" as email form
    And the user sets "1234567890" as phone form
    And the user sets "La Paz" as address form
    #And I click the submit button
    #And the user clicks as Submit button form

