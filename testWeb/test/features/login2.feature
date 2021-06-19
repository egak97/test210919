Feature: Bukalapak Login Page 2

Background: user in bukalapak login page
Given user go to bukalapak login page

Scenario Outline: user login with <credential>
When user input <userCred> in username
And user input <password> in password
And user click login
Then user redirected to homepage

Examples:
    | credential | userCred           | password          |
    | Email      | egakr97@gmail.com  | testBukalapak123  |
    | Username   | ega_k_637464       | testBukalapak123  |
    # | Phone      | 082236826986       | testBukalapak123  |
