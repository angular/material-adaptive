// Load custom application controllers and modules.

import PestoDashboard         from './dashboard/_module';
import PestoRecipeViewer      from './recipeViewer/_module';
import PestoSettings          from './settings/_module';
import PestoUtils             from './utils/_module';
import PestoModels            from './model/_module';
import PestoConfigurations    from './configuration/_module';

// Load loggers for injection and pre-angular debugging
import { LogDecorator }       from 'utils/LogDecorator';

export default angular.module('pesto-app', [ 'ngMaterial', 'ngRoute',
      PestoDashboard.name,
      PestoRecipeViewer.name,
      PestoSettings.name,
      PestoUtils.name,
      PestoModels.name,
      PestoConfigurations.name
   ])
   .config( ['$provide', ($provide) => {
     LogDecorator($provide);
   }]);
