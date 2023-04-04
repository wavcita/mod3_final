@ui-tests
Feature: Select TextBox element into Demoqa

#  Background: Select Elements option in home page
#      Given the user selects the Elements option

@testbox

Scenario: Select Elements option in home page
    #Given the user selects the Elements option
    Given the user clicks the text box button
    And the user sets "Maria Isabel" as Full Name
    And the user sets "isajocabet@gmail.com" as emailText
    And the user sets "Av. Oquendo Nro.58" as current Adress
    And the user sets "Av. Siglo XX nro 214, entre Martin Cardenas y Guayacan" as permanent Adress
    And the user clicks as Submits button
    # When the user clicks the Login button
    # Then the user should see "app/today" text on the URL
