// Load custom application controllers and modules.

import ShrineDashboard      from './dashboard/_module';
import ShrineProducts       from './products/_module';
import ShrineConfigurations from './configuration/_module';
import ShrineModels         from './model/_module';
import ShrineUtils          from './utils/_module';

// Load loggers for injection and pre-angular debugging
import {LogDecorator} from 'utils/LogDecorator';

export default angular
  .module('shrine-app', ['ngMaterial', 'ngComponentRouter',
    ShrineDashboard.name,
    ShrineProducts.name,
    ShrineUtils.name,
    ShrineModels.name,
    ShrineConfigurations.name
  ])
  .value('$routerRootComponent', 'shrine')
  .component('shrine', {
    template: '<ng-outlet></ng-outlet>',
    $routeConfig: [
      { path: '/dashboard/...'        , name: 'dashboard', component: 'dashboard', useAsDefault : true},
      { path: '/dashboard/:category?' , name: 'dashboard', component: 'dashboard'    },
      { path: '/product/:id '          , name: 'product'  , component: 'productViewer'}
    ]
  })
  .config(['$provide', '$locationProvider', ($provide, $locationProvider) => {
    LogDecorator($provide);
    $locationProvider.html5Mode(true);
  }]);
