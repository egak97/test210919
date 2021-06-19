/* eslint-disable no-undef */
var chai = require('chai');
var chaiWebdriver = require('chai-webdriverio').default;
chai.use(chaiWebdriver(browser));

const timeout = 120000;

export default class Page {
  open(path) {
    browser.url(path);
  }

  waitElementDisplayed(element) {
    if (!element.isDisplayed()) {
      element.waitForDisplayed({timeout});
    }
  }

  waitElementExist(element) {
    if (!element.isExisting()) {
      element.waitForExist({timeout});
    }
  }

  clickElement(element) {
    this.waitElementDisplayed(element);
    element.click();
  }

  inputElement(element, value) {
    this.waitElementDisplayed(element);
    element.clearValue();
    element.setValue(value);
  }

  titleShouldEquals(value) {
    browser.getTitle().should.equal(value);
  }

  urlShouldEquals(value) {
    browser.getUrl().should.equals(value);
  }

  isElementDisplayed(element) {
    this.waitElementDisplayed(element);
    return element.isDisplayed();
  }

  isElementExisting(element) {
    this.waitElementExist(element);
    return element.isExisting();
  }
  elementIsClickable(element) {
    this.isElementClickable(element).should.be.true;
  }
  
  isElementClickable(element) {
    this.waitElementDisplayed(element);
    return element.isClickable();
  }

  elementShouldDisplayed(element) {
    this.isElementDisplayed(element).should.be.true;
  }

  elementScrollIntoView(element) {
    element.scrollIntoView();
  }
  
  clickScrollElement(element) {
    this.elementScrollIntoView(element);
    this.clickElement(element);
  }

  elementScrollShouldDisplayed(element) {
    element.scrollIntoView();
    this.waitElementDisplayed(element)
    this.isElementDisplayed(element).should.be.true
  }

  elementShouldHaveText(element, text) {
    const res = this.getElementText(element);
    expect(res).equals(text);
  }

  elementShouldHaveValue(element, value) {
    const res = this.getElementValue(element);
    expect(res).equals(value);
  }

  elementScrollInputText(element, value) {
    element.scrollIntoView();
    this.waitElementDisplayed(element);
    element.clearValue();
    element.setValue(value);
  }

  elementShouldHaveAttributeValue(element, attributeName, value) {
    this.waitElementDisplayed(element);
    const res = this.getAttributeValue(attributeName);
    expect(res).equals(value);
  }

  elementShouldNotClickable(element) {
    this.isElementClickable(element).should.be.false;
  }

  alertShouldDisplayed(){
    browser.isAlertOpen();
    browser.acceptAlert();
  }

  alertShouldHaveText(text) {
    this.alertShouldDisplayed();
    const alertText = browser.getAlertText();
    expect(alertText).to.have.text(text);
  }

  elementDragAndDrop(element, target) {
    element.dragAndDrop(target);
  }

  enterBrowser(){
    browser.keys(['\ue007']);
  }

  switchWindowViaTitle(url){
    browser.waitUntil( 
      () => browser.switchWindow(url),
      {
        timeout: timeout,
        timeoutMsg: 'expected window to be show after 10s',
      }
    )
  }

  getElementValue(element) {
    return element.getValue();
  }

  getAttributeValue(element, attributeName) {
    return element.getAttribute(attributeName);
  }

  getElementText(element) {
    return element.getText();
  }

}
