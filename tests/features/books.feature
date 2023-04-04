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
Feature: Select form element into Demoqa

#  Background: Select Elements option in home page
#      Given the user selects the Elements option

@testForm

Scenario: Select Elements option in home page

Feature: Agregar y eliminar libros de la colección

  Scenario: Agregar libro a la colección
    Given I am on the Books page
    When I search for "Sapiens" in the "Books" category
    And I add the first book to my collection
    Then the book should be displayed in my collection