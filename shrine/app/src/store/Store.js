const URL_ACTION_ICONS = 'assets/svg/actions.svg';
const URL_ICON_MENU    = 'assets/svg/menu.svg';
const URL_ICON_SHOPPING  = 'assets/svg/shopping_cart.svg';
const URL_ICON_MORE  = 'assets/svg/more_vert.svg';
const URL_ICON_SEARCH  = 'assets/svg/search.svg';
const URL_ICON_TWITTER  = 'assets/svg/twitter.svg';
const URL_ICON_EMAIL  = 'assets/svg/email.svg';
const URL_ICON_MESSAGE  = 'assets/svg/message.svg';
const URL_ICON_FACEBOOK  = 'assets/svg/facebook.svg';
const URL_ICON_CHECKED  = 'assets/svg/check_circle.svg';

import FrameController from 'store/frame/FrameController'
import CatalogController from 'store/CatalogController'
import ItemsService from 'store/ItemsService'
import SharingService from 'store/SharingService'

import { ExternalLogger } from 'utils/LogDecorator';

let $log = new ExternalLogger();
    $log = $log.getInstance( 'BOOTSTRAP' );
    $log.debug( 'Configuring "store" module' );

let moduleName = angular
      .module( 'store', [ ] )
      .controller('FrameController' , FrameController )
      .controller('CatalogController' , CatalogController )
      .service('ItemsService' , ItemsService )
      .service('SharingService' , SharingService )
      .config( ($mdIconProvider) => {
        $log.debug( 'Configuring $mdIconProvider' );

        // Register `action` iconset & icons for $mdIcon service lookups
        $mdIconProvider
          .icon('menu', URL_ICON_MENU, 24)
          .icon('shopping_cart', URL_ICON_SHOPPING, 24)
          .icon('more_vert', URL_ICON_MORE, 24)
          .icon('twitter', URL_ICON_TWITTER, 24)
          .icon('email', URL_ICON_EMAIL, 24)
          .icon('message', URL_ICON_MESSAGE, 24)
          .icon('facebook', URL_ICON_SEARCH, 24)
          .icon('search', URL_ICON_SEARCH, 24)
          .icon('checked', URL_ICON_CHECKED, 24);
      })
      .config( ($stateProvider, $urlRouterProvider) => {
        $log.debug( 'Configuring $routeProvider' );

        // Register `action` iconset & icons for $mdIcon service lookups
        $stateProvider
          .state('search', {
            url: '/search/:searchTerm?', 
            views: {
              'frame': { 
                templateUrl: 'src/store/frame/frame.html',
                controller: 'FrameController as ctrl',
                data: {
                  isSearch: true
                }  
              },
              'main': { 
                templateUrl: 'src/store/view/catalog.html',
                controller: 'CatalogController as catalog',
              }
            }
          })
          .state('default', {
            url: '/:category', 
            views: {
              'frame': { 
                templateUrl: 'src/store/frame/frame.html',
                controller: 'FrameController as ctrl',
                data: {
                  isSearch: false
                }  
              },
              'main': { 
                templateUrl: 'src/store/view/catalog.html',
                controller: 'CatalogController as catalog',
              }
            }
          })
        
        $urlRouterProvider.otherwise('/');
      })
      .config( ($mdThemingProvider) => {
        $mdThemingProvider.definePalette('white',
          $mdThemingProvider.extendPalette('grey', {'500': '#FFFFFF'}));
        $mdThemingProvider.definePalette('black',
          $mdThemingProvider.extendPalette('grey', {'500': '#000000'}));
        $mdThemingProvider.theme('default')
          .primaryPalette('black')
          .accentPalette('black');
      })
      .name;

export default moduleName;




