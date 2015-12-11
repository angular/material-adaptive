import ShrineDomUtils from 'utils/ShrineDomUtils';
import constantsModuleName from 'utils/ShrineConstants';

let moduleName = angular.module('shrine.utils', [constantsModuleName])
    .service('ShrineDomUtils', ShrineDomUtils)
    .name;

export default moduleName;
    