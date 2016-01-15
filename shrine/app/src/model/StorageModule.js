import HeroStorage from 'model/HeroStorage';
import ItemStorage from 'model/ItemStorage';

const moduleName = angular.module('shrine.storage', [])
    .service('HeroStorage', HeroStorage)
    .service('ItemStorage', ItemStorage)
    .name;

export default moduleName;
