import RecipeStorage from 'model/RecipeStorage';
import SettingsStorage from 'model/SettingsStorage';

const moduleName = angular.module('pesto.storage', [])
    .service('RecipeStorage', RecipeStorage)
    .service('SettingsStorage', SettingsStorage)
    .name;

export default moduleName;
