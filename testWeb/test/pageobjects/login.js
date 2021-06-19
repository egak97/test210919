/* eslint-disable no-undef */
import Page from './page';

class login extends Page {

    get logo() {return $('.logo'); }
    get titleText() { return $('.heading > span'); }
    get inputUsername() { return $('#user_session_username'); }
    get inputPassword() { return $('#user_session_password'); }
    get buttonLogin() { return $('//button[text()="Login"]'); }
    get buttonLoginFacebook() { return $('//span[text()="Login dengan Facebook"]'); }
    get buttonLoginGoogle() { return $('//span[text()="Login dengan Google"]')}

    goToLoginPage() {
        super.open('https://accounts.bukalapak.com/login');
        super.elementShouldDisplayed(this.logo);
        super.elementShouldDisplayed(this.titleText);
        super.elementShouldDisplayed(this.inputUsername);
        super.elementShouldDisplayed(this.inputPassword);
        super.elementShouldDisplayed(this.buttonLogin);
        super.elementShouldDisplayed(this.buttonLoginFacebook);
        super.elementShouldDisplayed(this.buttonLoginGoogle);
      }
    
    clickButtonLogin() { 
        super.elementScrollShouldDisplayed(this.buttonLogin);
        super.clickElement(this.buttonLogin);
    }

    inputEmailField(cred) { 
        super.elementShouldDisplayed(this.inputUsername);
        super.inputElement(this.inputUsername, cred);
        browser.pause(1000);
    }

    inputPasswordField(cred) {
        super.elementShouldDisplayed(this.inputPassword);
        super.inputElement(this.inputPassword, cred);
        browser.pause(1000);
    }
    
    clickButtonFacebook() {
        super.clickScrollElement(this.buttonLoginFacebook);
    }

    clickButtonGoogle() {
        super.clickScrollElement(this.buttonLoginGoogle);
    }

    validateURLHomepage() {
        browser.pause(5);
        super.urlShouldEquals('https://www.bukalapak.com/');
    }


}

export default new login();