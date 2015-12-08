import RecipeDetailController from 'detail/RecipeDetailController';
import backImgDirective from 'detail/BackImgDirective';
import imageOnloadDirective from 'detail/ImageOnloadDirective';

let moduleName = angular.module('pesto.detail', [])
    .controller('RecipeDetailController', RecipeDetailController)
    .directive('backImg', backImgDirective)
    .directive('imageonload', imageOnloadDirective)
    .name;

export default moduleName;
