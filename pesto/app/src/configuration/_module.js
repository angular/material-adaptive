import ViewConfigurations from './ViewConfigurations';
import PestoRoutes       from './RouteConfigurations';

export default angular.module('pesto.configuration', [ ] )
    .constant('pestoViewConfigurations', ViewConfigurations )
    .config( [ '$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {
       PestoRoutes.configure($routeProvider);
       // $locationProvider.html5Mode(true);
     }]);
