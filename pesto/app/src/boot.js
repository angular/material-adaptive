
// Load the Angular Material CSS associated with ngMaterial
// then load the main.css to provide overrides, etc.

import 'angular-material/angular-material.css!'
import 'assets/app.css!'
import 'detail/view/detail.css!'
import 'home/view/home.css!'
import 'settings/view/settings.css!'

// Load Angular libraries

import angular from 'angular'
import material from 'angular-material'
import animate from 'angular-animate'
import 'angular-route'

// Load custom application modules

import main from 'app/main'

import MainController from 'app/MainController';
import HomeController from 'home/HomeController';
import RecipeDetailController from 'detail/RecipeDetailController';
import SettingsController from 'settings/SettingsController';

// Load loggers for injection and pre-angular debugging

import { LogDecorator, ExternalLogger } from 'utils/LogDecorator';


/**
 * Manually bootstrap the application when AngularJS and
 * the application classes have been loaded.
 */
angular
  .element( document )
  .ready( function() {

    const appName = 'starter-app';
    let $log = new ExternalLogger();

    $log = $log.getInstance( "BOOTSTRAP" );
    $log.debug( "Initializing '{0}'", [ appName ] );

    const body = document.getElementsByTagName("body")[0];

    const app = angular
          .module( appName, [ material, 'ngRoute', 'ngAnimate', main ] )
          .config( ['$provide', LogDecorator] );
    
    app.config(['$routeProvider', ($routeProvider) => {
      $routeProvider.when('/home', {
        templateUrl: 'src/home/view/home.html',
        controller: 'HomeController',
        controllerAs: 'home',
      })
      .when('/settings', {
        templateUrl: 'src/settings/view/settings.html',
        controller: 'SettingsController',
        controllerAs: 'settings',
      })
      .when('/recipe/:id', {
        templateUrl: 'src/detail/view/detail.html',
        controller: 'RecipeDetailController',
        controllerAs: 'detail',
      })
      .otherwise({redirectTo: '/home'});
    }]);
    
    app.controller('MainController', MainController)
        .controller('HomeController', HomeController)
        .controller('SettingsController', SettingsController)
        .controller('RecipeDetailController', RecipeDetailController);

    angular.bootstrap( body, [ app.name ], { strictDi: false })

  });



