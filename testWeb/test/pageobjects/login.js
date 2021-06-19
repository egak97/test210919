/* eslint-disable no-undef */
import Page from './page';

class login extends Page {

    get logo() {return $('.logo'); }
    get titleText() { return $('.heading > span'); }
    get belumPunyaAkun() { return $('.register-top > span'); }
    get registerText() { return $('.register-top > a'); }
    get ingatSaya() { return $('#rememberMe'); }
    get lupaPassword() { return $("//a[text()='Lupa Password?']"); }
    get inputUsername() { return $('#user_session_username'); }
    get inputPassword() { return $('#user_session_password'); }
    get buttonLogin() { return $('//button[text()="Login"]'); }
    get buttonLoginFacebook() { return $('.input-container:nth-child(7) .social-button'); }
    get buttonLoginGoogle() { return $('.input-container:nth-child(8) .social-button')}

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
        browser.pause(1000);
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
        super.elementScrollIntoView(this.buttonLoginFacebook);
        super.clickElement(this.buttonLoginFacebook);
        browser.pause(5000);
    }

    clickButtonGoogle() {
        super.elementScrollIntoView(this.buttonLoginGoogle);
        super.clickElement(this.buttonLoginGoogle);
        browser.pause(5000);
    }

    validateURLHomepage() {
        browser.pause(5000);
        super.urlShouldEquals('https://www.bukalapak.com/');
    }

    validateNewGoogleLoginPage() { 
        this.switchWindowViaTitle('Masuk - Akun Google');
    }

    validateNewFacebookLoginPage() { 
        this.switchWindowViaTitle('Facebook');
    }


    verifyLoginPage() {
        super.elementShouldDisplayed(this.logo);
        super.elementShouldDisplayed(this.titleText);
        super.elementShouldHaveText(this.titleText, 'Silakan masuk ke dalam akun kamu');
        super.elementShouldDisplayed(this.belumPunyaAkun);
        super.elementShouldHaveText(this.belumPunyaAkun, 'Belum punya akun? ');
        super.elementShouldDisplayed(this.registerText);
        super.elementShouldHaveText(this.registerText, 'Daftar di sini');
        super.elementIsClickable(this.registerText);
        super.elementShouldDisplayed(this.inputUsername);
        super.elementShouldDisplayed(this.inputPassword);
        super.elementShouldDisplayed(this.buttonLogin);
        super.elementShouldHaveText(this.buttonLogin, 'Login');
        super.elementIsClickable(this.buttonLogin);
        super.elementShouldDisplayed(this.buttonLoginFacebook);
        super.elementIsClickable(this.buttonLoginFacebook);
        super.elementShouldDisplayed(this.buttonLoginGoogle);
        super.elementIsClickable(this.buttonLoginGoogle);
    }


}

export default new login();