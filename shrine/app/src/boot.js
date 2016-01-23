/**
 * We want our styles to load after the ngMaterial CSS, but there's
 * inexplicably no way to enforce that with jspm.
 * http://stackoverflow.com/questions/32258456/importing-css-and-controlling-order-in-head-using-jspm-and-system-js
 */

import 'angular-material/angular-material.css!'
import 'assets/css/style.css!'

// Load Angular libraries

import angular from 'angular'
import material from 'angular-material'
import animate from 'angular-animate'
import 'angular-route'

// Load custom application controllers and modules.

import HomeController from 'home/HomeController';
import DetailController from 'detail/DetailController';

import gridLayoutDirective from 'gridlayout/GridLayoutDirective';
import itemCardDirective from 'itemcard/ItemCardDirective';


import storageModule from 'model/StorageModule';
import shrineUtilsModule from 'utils/ShrineUtils';


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
            shrineUtilsModule,
          ])
          .config( ['$provide', LogDecorator] );

    app.config(['$routeProvider', ($routeProvider) => {
      $routeProvider.when('/:category?', {
        templateUrl: 'src/home/view/home.html',
        controller: 'HomeController',
        controllerAs: 'home',
      })
      .when('/item/:id', {
        templateUrl: 'src/detail/view/detail.html',
        controller: 'DetailController',
        controllerAs: 'detail',
      })
      .otherwise({redirectTo: '/'});
    }]);

    app.controller('HomeController', HomeController)
       .controller('DetailController', DetailController)
       .directive('gridLayout', () => new gridLayoutDirective)
       .directive('itemCard', () => new itemCardDirective);

    angular.bootstrap( body, [ app.name ], { strictDi: true })

  });



