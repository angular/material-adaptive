// Load custom application controllers and modules.

import ShrineDashboard        from './dashboard/_module';
import ShrineProducts         from './products/_module';
import ShrineConfigurations   from './configuration/_module';
import ShrineUtils            from './utils/_module';
import ShrineModels           from './model/_module';

// Load loggers for injection and pre-angular debugging

import { LogDecorator }       from 'utils/LogDecorator';

export default angular
   .module('shrine-app', [ 'ngMaterial', 'ngRoute',
      ShrineDashboard.name,
      ShrineProducts.name,
      ShrineUtils.name,
      ShrineModels.name,
      ShrineConfigurations.name
   ])
   .config( ['$provide', ($provide) => {
     LogDecorator($provide);
   }]);
