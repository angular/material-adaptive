'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  browser.get('/');

  it('should automatically redirect to /feature when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/feature");
  });
});
