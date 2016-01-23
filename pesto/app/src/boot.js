/**
 * We want our styles to load after the ngMaterial CSS, but there's
 * inexplicably no way to enforce that with jspm.
 * http://stackoverflow.com/questions/32258456/importing-css-and-controlling-order-in-head-using-jspm-and-system-js
 */

import 'angular-material/angular-material.css!'
import 'assets/style.css!'

// Load Angular libraries

import angular from 'angular'
import material from 'angular-material'
import animate from 'angular-animate'
import 'angular-route'

// Load custom application controllers and modules.

import HomeController from 'home/HomeController';
import RecipeDetailController from 'detail/RecipeDetailController';
import SettingsController from 'settings/SettingsController';

import storageModule from 'model/StorageModule';
import detailPageModule from 'detail/RecipeDetailModule';
import pestoUtilsModule from 'utils/PestoUtils';


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

    const app = angular.module(appName, [
            material,
            'ngRoute',
            'ngAnimate',
            storageModule,
            detailPageModule,
            pestoUtilsModule,
          ])
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

    app.controller('HomeController', HomeController)
        .controller('SettingsController', SettingsController)
        .controller('RecipeDetailController', RecipeDetailController);

    angular.bootstrap( body, [ app.name ], { strictDi: true })

  });



