import BaseAdaptiveController from './../utils/BaseAdaptiveController'

/**
 * Controller for the home page.
 */
class RecipeCardsController extends  BaseAdaptiveController {
  /**
   * @constructor
   * @param {!angular.Scope} $scope
   * @param {!angular.Location} $location
   * @param {!Object} pestoMQObserver
   * @param {!angular.Log} $log
   */
  constructor($scope, $location, pestoMQObserver, $log ) {
    super($scope, pestoMQObserver, $log.getInstance("RecipeCardsController"));

    this.$scope = $scope;
    this._$location = $location;
  }

  /**
   * Redirects to the recipe.
   * @param {!event} ev Click event.
   * @param {!String} idx
   */
  goToRecipe(ev, idx) {
    ev.stopPropagation();
    this._$location.path(`/recipe/${idx}`);
  }
}

export default {
  name : 'recipeCards',
  config : {
    bindings: {  items: '<' },
    controller: [ '$scope', '$location', 'pestoMQObserver', '$log', RecipeCardsController ],
    templateUrl : 'src/dashboard/tmpl/recipeCards.html',
  }
};
