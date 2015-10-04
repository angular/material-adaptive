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




