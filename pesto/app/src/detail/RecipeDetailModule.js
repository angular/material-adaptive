import BottomSheetShareController from 'detail/BottomSheetShareController';
import RecipeDetailController from 'detail/RecipeDetailController';
import backImgDirective from 'detail/BackImgDirective';
import imageOnloadDirective from 'detail/ImageOnloadDirective';

let moduleName = angular.module('pesto.detail', [])
    .controller('RecipeDetailController', RecipeDetailController)
    .controller('BottomSheetShareController', BottomSheetShareController)
    .directive('backImg', backImgDirective)
    .directive('imageonload', imageOnloadDirective)
    .name;

export default moduleName;
