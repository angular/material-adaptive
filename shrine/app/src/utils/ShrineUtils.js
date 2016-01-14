import ShrineDomUtils from 'utils/ShrineDomUtils';
import Utils from 'utils/Utils';
import constantsModuleName from 'utils/ShrineConstants';

let moduleName = angular.module('shrine.utils', [constantsModuleName])
    .service('ShrineDomUtils', ShrineDomUtils)
    .service('Utils', Utils)
    .name;

export default moduleName;
