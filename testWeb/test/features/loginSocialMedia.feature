Feature: Bukalapak Login Page with social media

Background: user in bukalapak login page
Given user go to bukalapak login page

Scenario Outline: user login with <credential>
When user click <socmed>
Then user redirected to <socmed> link

Examples:
    | credential | socmed    |
    | Facebook   | facebook  |
    | Google     | google    |
