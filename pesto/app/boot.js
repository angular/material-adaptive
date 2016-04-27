// Load Angular libraries

import angular from 'angular'
import 'angular-animate'
import 'angular-route'
import material from 'angular-material'

import PestoApp from './src/PestoApp';

/**
 * Manually bootstrap the application when AngularJS and
 * the application classes have been loaded.
 */
angular
  .element( document )
  .ready( function() {
    let body = document.getElementsByTagName("body")[0];
    angular.bootstrap( body, [ PestoApp.name, material, 'ngRoute' ], { strictDi: true })
  });
