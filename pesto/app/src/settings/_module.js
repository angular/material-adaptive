/**
 * Configure the pesto 'Settings' module
 * Register the settings component and its child components
 */

import Settings              from './Settings';

export default angular.module('pesto.settings', [ ] )
    .component( Settings.name    , Settings.config );
