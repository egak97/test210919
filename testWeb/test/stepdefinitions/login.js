import { Given, Then, When } from 'cucumber';
import login from '../pageobjects/login';

Given(/^user go to bukalapak login page$/, () => {
    login.goToLoginPage();
});

When(/^user input ([^"]*) in username$/, (input) => {
    login.inputEmailField(input);
});

When(/^user input ([^"]*) in password$/, (input) => {
    login.inputPasswordField(input);
});

When(/^user click login$/, () => {
    login.clickButtonLogin();
});

When(/^user click ([^"]*)$/, (input) => {
    if(input === 'Facebook') {
        login.clickButtonFacebook();
    }
    else if (input === 'Google'){
        login.clickButtonGoogle(); 
    }
});

Then(/^user redirected to homepage$/, () => {
    login.validateURLHomepage();
});