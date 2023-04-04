# Install Cucumber JS allure
# https://www.npmjs.com/package/allure-cucumberjs
# https://github.com/allure-framework/allure-js
# https://github.com/allure-framework/allure-js/blob/master/packages/allure-cucumberjs/README.md

# Feature: First Test

# Scenario: Breaker guesses a word
#   Given the Maker has chosen a word
#   When the Breaker makes a guess
#   Then the Maker is asked to score

@ui-tests4
Feature: Select book element into Demoqa

#  Background: Select Elements option in home page
#      Given the user selects the Elements option

@testForm

Scenario: Select Elements option in home page

    Given the user clicks the add button form
    And the user clicks the book
