// Load Angular libraries
import angular from 'angular';
import material from 'angular-material';
import route from 'angular-route';

// Load custom application modules
import main from 'app/main';

/**
 * Manually bootstrap the application when AngularJS and
 * the application classes have been loaded.
 */
angular.element(document).ready(function() {
  let body = document.body;
  let app = angular.module('crane', ['ngRoute', material, main,]);
  angular.bootstrap(body, [app.name], {strictDi: false});
});
