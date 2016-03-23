// Load custom application controllers and modules.

import ShrineUtils from './utils/Utils';
import ShrineModels from './model/Models';
import ShrineConfigurations from './configuration/Configuration';

import ShrineDashboard from './dashboard/Dashboard'
import ShrineProducts from './products/Products'

// Load loggers for injection and pre-angular debugging
import { LogDecorator } from 'utils/LogDecorator';

export default angular
   .module('shrine-app', [
      'ngMaterial',  'ngRoute',
      ShrineUtils.name,
      ShrineModels.name,
      ShrineConfigurations.name,
      ShrineDashboard.name,
      ShrineProducts.name
   ])
   .config( ['$provide', ($provide) => {
     LogDecorator($provide);
   }]);
