describe('Application Homepage', function() {
  it('should display the application name', function() {
    browser.get('http://localhost:9000');

    var appName = element(by.css('a.navbar-brand')); //using the CSS selector

    expect(appName.getText()).toEqual('App. Rest Angular');
  });

  it('aller sur le crud sans log', function() {
    browser.get('http://localhost:9000');

    browser.navigate('http://localhost:9000/#/persons');

    expect(browser.getCurrentUrl()).toBe('http://localhost:9000/#/login');
  });


  it('aller sur le crud avec log', function() {
    browser.get('http://localhost:9000');

    var linkPersons = element(by.linkText('CRUD via WCF'));


    var inputUserName = element(by.id('username'));
    inputUserName.sendKeys('terri0@adventure-works.com');

    var inputUserName = element(by.id('password'));
    inputUserName.sendKeys('terri0');

    inputUserName.submit().then(function(){
      linkPersons.click();
    });



    expect(browser.getCurrentUrl()).toBe('http://localhost:9000/#/persons');
  });

});
