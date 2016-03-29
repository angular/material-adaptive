import MediaQueryObserver from './MediaQueryObserver';
import LodashUtils        from './LodashUtils';

export default angular.module('shrine.utils', [ ] )
    .service('$shrineMQObserver', MediaQueryObserver)
    .service('$shrineUtils', LodashUtils);



