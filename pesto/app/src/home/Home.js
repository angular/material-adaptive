const URL_ACTION_ICONS = 'assets/svg/actions.svg';
const URL_ICON_MENU    = 'assets/svg/menu.svg';
const URL_ICON_SHOPPING  = 'assets/svg/shopping_cart.svg';
const URL_ICON_MORE  = 'assets/svg/more_vert.svg';

import HomeController from 'home/HomeController';
import RecipeStorage from 'model/RecipeStorage';

import { ExternalLogger } from 'utils/LogDecorator';

let $log = new ExternalLogger();
    $log = $log.getInstance( "BOOTSTRAP" );
    $log.debug( "Configuring 'home' module" );

let moduleName = angular
      .module( "home", [ ] )
      .controller("HomeController" , HomeController )
      .service("RecipeStorage", RecipeStorage)
      .name;

export default moduleName;




