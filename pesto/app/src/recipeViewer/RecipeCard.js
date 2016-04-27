/**
 * Controller for the recipe viewer.
 */
class RecipeCardController {
  /**
   * @constructor
   * @param {!angular.Scope} $scope
   * @param {!Object} pestoData
   * @param {!angular.Log} $log
   */
  constructor($scope, pestoData, $log ) {
    $log.getInstance("RecipeViewerController");

    this.$scope = $scope;
    this._data = pestoData;
  }

  $onInit() {
    this._gatherSettingsData();
  }

  /**
   * Returns if the recipe has been favorited.
   * @return {Boolean}
   */
  isFavorite() {
    let favoriteIds = this.settings.favoriteRecipeIds;
    return !!(favoriteIds && this.recipe && favoriteIds[this.recipe.id]);
  }

  /**
   * Toggles the favorite recipe.
   * @param {!event} ev Click event.
   */
  toggleFavorite(ev) {
    ev.stopPropagation();
    let favoriteIds = this.settings.favoriteRecipeIds;
    // Fortunately, an empty object is true.
    if (favoriteIds && this.recipe) {
      if (favoriteIds[this.recipe.id]) {
        delete favoriteIds[this.recipe.id];
      } else {
        favoriteIds[this.recipe.id] = true;
      }
      this._data.saveSettings(this.settings);
    }
  }

  // ******************************
  // Private Methods
  // ******************************

  /**
   * Fetches all the settings data.
   */
  _gatherSettingsData() {
    this._data
      .readSettings()
      .then(settings => {
        this.settings = settings;
      });
  }
}

export default {
  name : 'recipeCard',
  config : {
    bindings: {  recipe: '<' },
    controllerAs: '$ctrl',
    controller: [ '$scope', 'pestoData', '$log', RecipeCardController ],
    templateUrl : 'src/recipeViewer/tmpl/recipeCard.html',
  }
};
