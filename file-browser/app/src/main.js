import files from 'files/Files';
import { ExternalLogger } from 'utils/LogDecorator';

let $log = new ExternalLogger();
    $log = $log.getInstance( "BOOTSTRAP" );
    $log.debug( "Configuring 'main' module" );

export default angular.module('main', [ files] )
		.config(function($mdThemingProvider) {
		  $mdThemingProvider.theme('default')
	    .primaryPalette('blue').accentPalette('cyan');
		})
		.name;




