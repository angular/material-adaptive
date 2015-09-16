const URL_ACTION_ICONS = 'assets/svg/actions.svg';
const URL_ICON_MENU    = 'assets/svg/menu.svg';
const URL_ICON_SHOPPING  = 'assets/svg/shopping_cart.svg';
const URL_ICON_MORE  = 'assets/svg/more_vert.svg';

import CatalogController from 'store/CatalogController'

import { ExternalLogger } from 'utils/LogDecorator';

let $log = new ExternalLogger();
    $log = $log.getInstance( "BOOTSTRAP" );
    $log.debug( "Configuring 'store' module" );

let moduleName = angular
      .module( "store", [ ] )
      .controller("CatalogController" , CatalogController )
      .config( ($mdIconProvider) => {
        $log.debug( "Configuring $mdIconProvider" );

        // Register `action` iconset & icons for $mdIcon service lookups
        $mdIconProvider
          .icon('menu', URL_ICON_MENU, 24)
          .icon('shopping_cart', URL_ICON_SHOPPING, 24)
          .icon('more_vert', URL_ICON_MORE, 24);
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




