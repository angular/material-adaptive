// Load custom application controllers and modules.


import ShrineDashboard      from './dashboard/Dashboard'
import ShrineProducts       from './products/Products'
import ShrineModels         from './model/Models';
import ShrineUtils          from './utils/Utils';
import ShrineConfigurations from './configuration/Configuration';

// Load loggers for injection and pre-angular debugging
import { LogDecorator } from 'utils/LogDecorator';

export default angular
   .module('shrine-app', [ 'ngMaterial',  'ngRoute',
      ShrineUtils.name,
      ShrineModels.name,
      ShrineConfigurations.name,
      ShrineDashboard.name,
      ShrineProducts.name
   ])
   .config( ['$provide', ($provide) => {
     LogDecorator($provide);
   }]);
