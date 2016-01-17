import BottomSheetShareController from 'detail/BottomSheetShareController';
import backImgDirective from 'detail/BackImgDirective';
import imageOnloadDirective from 'detail/ImageOnloadDirective';

let moduleName = angular.module('pesto.detail', [])
    .controller('BottomSheetShareController', BottomSheetShareController)
    .directive('backImg', backImgDirective)
    .directive('imageonload', imageOnloadDirective)
    .name;

export default moduleName;
