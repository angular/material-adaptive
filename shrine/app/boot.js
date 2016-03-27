// Load Angular libraries

import angular from 'angular'
import 'angular-animate'
import 'angular2/router'
import material from 'angular-material'

import ShrineApp from './src/ShrineApp';

/**
 * Manually bootstrap the application when AngularJS and
 * the application classes have been loaded.
 */
angular
  .element( document )
  .ready( function() {
    let body = document.getElementsByTagName("body")[0];
    angular.bootstrap( body, [ ShrineApp.name, material, 'ngComponentRouter' ], { strictDi: true })
  });



