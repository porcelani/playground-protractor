# Protractor Playground

## Simple start
http://www.protractortest.org/#/

```
webdriver-manager update && webdriver-manager start
protractor config.js
```

## Overview
https://www.youtube.com/watch?v=zpwQ8vAXhJ0

https://youtu.be/aQipuiTcn3U

https://youtu.be/iZjjb2xS-Ww


### [Finding](http://www.protractortest.org/#/api?view=ProtractorBy) 
	#### Angular Aplication
	element(by.binding('person.name'));
	element(by.model('person.name'));
	element(by.repeater('cat in pets').row(1).column('cat.name'));
	element.all(by.options('c for c in colors')).first();
	
	#### Any Aplication
	element(by.id('name'));
	element(by.css('.myClass'));  element(by.css('#myId'));
	element(by.css('md-tab-item:nth-child(1)'));
	element(by.className('myClass'));
	element(by.cssContainingText('div a','Link'));
	element(by.buttonText('Login'));
	element(by.particalButtonTex('Log'));
	
### Actions
	var el = element(by.css('.myClass'));
	el.click();
	el.sendKeys('text');
	el.getAttribute('value');
	
### Verifications
	var el = element(by.css('.myClass'));
	expect(el.getText()).toEqual('text');
	expect(el.getText()).toContain('text');
	expect(el.isDisplayed()).toBe(true);
	expect(el.isPresent()).toBe(true);
	
### [ExpectedConditions](http://www.protractortest.org/#/api?view=ProtractorExpectedConditions)
	var isClickable = EC.elementToBeClickable(button);

### [Debugging](https://github.com/angular/protractor/blob/master/docs/debugging.md)
	browser.pause()          Then run the test normally
    browser.debugger()       Then run the test in debug mode: `protractor debug yourTest.js`

### [Element Explorer](https://www.youtube.com/watch?v=ZLO6bDaRip4)
    ./node_modules/protractor/bin/elementexplorer.js   This is a console to test your comands
    
### [Page Objects](https://github.com/angular/protractor/blob/master/docs/page-objects.md#with-pageobjects)


### [Docker](https://hub.docker.com/r/grm78/protractor/)
```
docker run --rm -v <test project location>:/project grm78/protractor
```
