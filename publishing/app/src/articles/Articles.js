const URL_ICON_MENU    = 'assets/svg/menu.svg';
const URL_ICON_LIST    = 'assets/svg/list.svg';
const URL_ICON_BACK    = 'assets/svg/back.svg';

// Notes and Issues:
// https://docs.google.com/document/d/1-XsPsbKO8axU6jiOymB7ixkOF3xD4XoniiTPkPRD7Fw

// Load the custom app ES6 modules

import ArticlesController from 'articles/ArticlesController'
import ArticlesService    from 'articles/ArticlesDataservice'

import { ExternalLogger } from 'utils/LogDecorator';

let $log = new ExternalLogger();
    $log = $log.getInstance( "BOOTSTRAP" );
    $log.debug( "Configuring 'articles' module" );

// Define the Angular 'articles' module

let moduleName = angular
      .module( "articles", [ ] )
      .service("articlesService"       , ArticlesService )
      .controller("ArticlesController" , ArticlesController )
      .config( ($mdIconProvider, $mdThemingProvider) => {


        $log.debug( "Configuring $mdIconProvider" );

        // Register icons

        $mdIconProvider
          .icon('menu' ,URL_ICON_MENU, 24)
          .icon('list' ,URL_ICON_LIST, 24)
          .icon('back' ,URL_ICON_BACK, 24);

        $mdThemingProvider.theme('default')
          .primaryPalette('grey', {
            'default': 'A100', 
            'hue-1': '100',
          })
          .accentPalette('blue-grey')
          .backgroundPalette('grey', {
            'default': '100'
          });

      })
      .name;

export default moduleName;



