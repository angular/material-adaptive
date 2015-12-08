class RecipeDetailController {
  constructor($scope, $location, $routeParams, $timeout, $mdBottomSheet, PestoDomUtils, RecipeStorage) {
    this.location_ = $location;
    this.recipeStorage_ = RecipeStorage;
    this.PestoDomUtils = PestoDomUtils;

    this.menuItems = [
      { name: 'Tweet recipe', icon: 'extension' },
      { name: 'Email recipe', icon: 'mail' },
      { name: 'Message recipe', icon: 'message' },
      { name: 'Share on Facebook', icon: 'extension' },
    ];
    this.recipe = null;
    this.recipeId = $routeParams['id'];

    const id = parseInt(this.recipeId, 10);
    if (id) {
      RecipeStorage.getRecipe(id).then((recipe) => {
        if (recipe) {
          this.recipe = recipe;
        }
        else {
          console.log('Bad recipe id: ' + id);
          $location.path('/');
        }
      });
    }
    else {
      console.log('Bad recipe id: ' + id);
      $location.path('/');
    }

    PestoDomUtils.updateViewportDOM();
  }

  goBack(ev) {
    ev.stopPropagation();
    this.location_.path('/');
  }

  openMenu($mdOpenMenu, ev) {
    ev.stopPropagation();

    if (this.PestoDomUtils.getViewportResolution().size <= 480) {
      $mdBottomSheet.show({
        templateUrl: 'views/bottom-sheet-share.html',
        controller: 'BottomSheetShareCtrl',
        locals: {
          items: $scope.items
        },
        targetEvent: ev
      }).then((clickedItem) => {
        this.alert = clickedItem['name'] + ' clicked!';
      });
    } else {
      $mdOpenMenu(ev);
    }      
  }

  toggleFavorite(ev) {
    ev.stopPropagation();
    // TODO: add favorited to RecipeStorage and Recipe model.
    this.recipe.favorited = !this.recipe.favorited;
  }
}

RecipeDetailController.$inject = [
  '$scope', '$location', '$routeParams', '$timeout', '$mdBottomSheet',
  'PestoDomUtils', 'RecipeStorage'
];

export default RecipeDetailController;
