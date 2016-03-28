/**
 * Configure the shrine 'Dashboard' module
 * Register the dashboard component and its child components
 */

import Dashboard from './Dashboard';
import SideBar from'./SideBar';
import FeaturedItem from './FeaturedItem';
import NavBar from './NavBar';

export default angular
    .module('shrine.dashboard', [ ] )
    .component( Dashboard.name    , Dashboard.config )
    .component( FeaturedItem.name , FeaturedItem.config )
    .component( NavBar.name       , NavBar.config )
    .component( SideBar.name      , SideBar.config );

