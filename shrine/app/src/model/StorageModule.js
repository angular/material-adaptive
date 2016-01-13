import ItemStorage from 'model/ItemStorage';

const moduleName = angular.module('shrine.storage', [])
    .service('ItemStorage', ItemStorage)
    .name;

export default moduleName;
