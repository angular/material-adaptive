import BottomSheetShareController from 'detail/BottomSheetShareController';
import backImgDirective from 'detail/BackImgDirective';
import imageOnloadDirective from 'detail/ImageOnloadDirective';

// Don't install the main RecipeDetailController here; it's added in boot.js.
let moduleName = angular.module('pesto.detail', [])
    .controller('BottomSheetShareController', BottomSheetShareController)
    .directive('backImg', backImgDirective)
    .directive('imageonload', imageOnloadDirective)
    .name;

export default moduleName;
