/**
 * Controller for the background image component.
 */
class BackgroundImgController {
  /**
   * @constructor
   * @param {!angular.Scope} $scope
   */
  constructor($scope) {
    this.$scope = $scope;
  }
}

export default {
  name : 'backgroundImg',
  config : {
    controllerAs: '$ctrl',
    bindings : {  src: '<' },
    controller: [ '$scope', BackgroundImgController ],
    templateUrl : 'src/recipeViewer/tmpl/backgroundImg.html',
  }
};
