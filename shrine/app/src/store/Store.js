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
const URL_ICON_BACK  = 'assets/svg/arrow_back.svg';
const URL_ICON_SHARE  = 'assets/svg/share.svg';
const URL_ICON_ADD_SHOPPING  = 'assets/svg/add_shopping_cart.svg';
const URL_ICON_LOGO  = 'assets/svg/logo.svg';

import FrameController from 'store/frame/FrameController'
import CatalogController from 'store/CatalogController'
import SearchController from 'store/search/SearchController'
import DetailController from 'store/DetailController'
import ItemsService from 'store/ItemsService'
import SharingService from 'store/SharingService'
import ItemCardDirective from 'store/itemcard/ItemCard'
import SharingMenuController from 'store/sharingmenu/SharingMenu'

import { ExternalLogger } from 'utils/LogDecorator';

let $log = new ExternalLogger();
    $log = $log.getInstance( 'BOOTSTRAP' );
    $log.debug( 'Configuring "store" module' );

let moduleName = angular
      .module( 'store', [ ] )
      .controller('FrameController' , FrameController )
      .controller('CatalogController' , CatalogController )
      .controller('DetailController' , DetailController )
      .controller('SearchController' , SearchController )
      .controller('SharingMenuController', SharingMenuController )
      .directive('itemCard' , () => new ItemCardDirective )
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
          .icon('back', URL_ICON_BACK, 24)
          .icon('checked', URL_ICON_CHECKED, 24)
					.icon('add_shopping_cart', URL_ICON_ADD_SHOPPING, 24)
					.icon('logo', URL_ICON_LOGO, 24)
          .icon('share', URL_ICON_SHARE, 24);
      })
      .config( ($stateProvider, $urlRouterProvider, $locationProvider) => {
        $stateProvider
          .state('root', {
            abstract: true,
            views: {
              'frame@': {
                templateUrl: 'src/store/frame/frame.html',
                controller: 'FrameController as ctrl',
              },
            }
          })
          .state('root.search', {
            url: '/search/:searchTerm?',
            views: {
              'frame@': {
                templateUrl: 'src/store/search/search.html',
                controller: 'SearchController as search',
              },
              'main@root.search': {
                templateUrl: 'src/store/view/catalog.html',
              }
            }
          })
          .state('root.category', {
            url: '/:category',
            views: {
              'main@root': {
                templateUrl: 'src/store/view/catalog.html',
              }
            }
          })
          .state('root.category.detail', {
            url: '/:detail',
            views: {
              'main@root': {
                templateUrl: 'src/store/view/detail.html',
              }
            }
          })

        $urlRouterProvider.otherwise('/featured');
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
