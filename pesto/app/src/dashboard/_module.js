/**
 * Configure the pesto 'Dashboard' module
 * Register the dashboard component and its child components
 */

import Dashboard              from './Dashboard';
import RecipeCards            from './RecipeCards';
import Toolbar                from './Toolbar';
import SideBar                from './SideBar';

export default angular.module('pesto.dashboard', [ ] )
    .component( Dashboard.name    , Dashboard.config )
    .component( RecipeCards.name    , RecipeCards.config )
    .component( Toolbar.name , Toolbar.config )
    .component( SideBar.name , SideBar.config );

