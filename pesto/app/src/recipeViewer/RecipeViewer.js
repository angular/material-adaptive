import BaseAdaptiveController from './../utils/BaseAdaptiveController'

/**
 * Controller for the recipe viewer.
 */
class RecipeViewerController extends BaseAdaptiveController {
  /**
   * @constructor
   * @param {!angular.Scope} $scope
   * @param {!angular.Location} $location
   * @param {!angular.routeParams} $routeParams
   * @param {!Object} pestoMQObserver
   * @param {!Object} pestoData
   * @param {!angular.Log} $log
   */
  constructor($scope, $location, $routeParams, pestoMQObserver, pestoData, $log ) {
    super($scope, pestoMQObserver, $log.getInstance("RecipeViewerController"));

    this.$scope = $scope;
    this._$location = $location;
    this._data = pestoData;
    this._$body = document.body;
    this.recipeId = $routeParams['id'];
  }

  $onInit() {
    this._gatherRecipe();
  }

  // ******************************
  // Private Methods
  // ******************************

  /**
   * Initializes all events.
   */

  /**
   * Fetches the recipe.
   */
  _gatherRecipe() {
   this._data
      .getRecipe(this.recipeId)
      .then(recipe => {
        if (recipe) {
          this.recipe = recipe;
        }
        else {
          console.log('Bad recipe id: ' + id);
          this._$location.path('/');
        }
    });
  }
}

export default {
  name : 'recipeViewer',
  config : {
    controllerAs: '$ctrl',
    controller: [ '$scope', '$location', '$routeParams', 'pestoMQObserver', 'pestoData', '$log', RecipeViewerController ],
    templateUrl : 'src/recipeViewer/tmpl/recipeViewer.html',
  }
};
