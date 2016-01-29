import PestoDomUtils from 'utils/PestoDomUtils';
import constantsModuleName from 'utils/PestoConstants';

let moduleName = angular.module('pesto.utils', [constantsModuleName])
    .service('PestoDomUtils', PestoDomUtils)
    .name;

export default moduleName;
