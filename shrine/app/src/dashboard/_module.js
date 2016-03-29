/**
 * Configure the shrine 'Dashboard' module
 */

import LandingPageController  from './controllers/LandingPageController';
import FeaturedItemDirective  from './directives/FeaturedItemDirective';
import SideBarDirective       from './directives/SideBarDirective';
import NavBarDirective        from './directives/NavBarDirective';


export default angular.module('shrine.dashboard', [ ] )
    .controller('LandingPageController' , LandingPageController)    // no directive... @see RouteConfiguration

    .directive('sideBar'              , () => new SideBarDirective)
    .directive('featuredItem'         , () => new FeaturedItemDirective)
    .directive('navBar'               , () => new NavBarDirective);
