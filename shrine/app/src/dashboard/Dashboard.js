/**
 * Configure the shrine 'Dashboard' module
 */

import DashboardController    from './controllers/ShrineDashboardController';
import SideBarController      from'./controllers/SideBarController';
import FeaturedItemDirective  from './directives/FeaturedItemDirective';
import SideBarDirective       from './directives/SideBarDirective';
import NavBarDirective        from './directives/NavBarDirective';


export default angular.module('shrine.dashboard', [ ] )
    .controller('DashboardController' , DashboardController)
    .controller('SideBarController'   , SideBarController)
    .directive('sideBar'              , () => new SideBarDirective)
    .directive('featuredItem'         , () => new FeaturedItemDirective)
    .directive('navBar'               , () => new NavBarDirective);
