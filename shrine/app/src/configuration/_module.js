import ViewConfigurations from './ViewConfigurations';
import ShrineRoutes       from './RouteConfigurations';

export default angular
    .module('shrine.configuration', [ ] )
    .constant('shrineViewConfigurations', ViewConfigurations )
    .config( [ '$routeProvider', '$locationProvider', ($routeProvider) => {
       ShrineRoutes.configure($routeProvider);
     }]);
