Feature: Bukalapak Login Page with social media

Background: user in bukalapak login page
Given user go to bukalapak login page

Scenario Outline: user login with <credential>
When user click login with <socmed> 
Then user redirected to <socmed> link

Examples:
    | socmed     |
    | Facebook   | 
    | Google     | 
