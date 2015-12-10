class RecipeDetailController {
  constructor($location, $routeParams, $mdBottomSheet, PestoDomUtils, RecipeStorage, SettingsStorage) {
    this.location_ = $location;
    this.mdBottomSheet_ = $mdBottomSheet;
    this.recipeStorage_ = RecipeStorage;
    this.PestoDomUtils = PestoDomUtils;

    this.menuItems = [
      { name: 'Tweet recipe', icon: 'http://www.gstatic.com/angular/material-adaptive/pesto/twitter.png', materialIcon: false },
      { name: 'Email recipe', icon: 'mail', materialIcon: true },
      { name: 'Message recipe', icon: 'message', materialIcon: true },
      { name: 'Share on Facebook', icon: 'http://www.gstatic.com/angular/material-adaptive/pesto/facebook.png', materialIcon: false },
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

    this.SettingsStorage = SettingsStorage;
    this.userSettings = {};
    // TODO: Better async.
    this.SettingsStorage.readSettings().then((settings) => {
      this.userSettings = settings;
    });

    PestoDomUtils.updateViewportDOM();
  }

  goBack(ev) {
    ev.stopPropagation();
    this.location_.path('/');
  }

  openMenu($mdOpenMenu, ev) {
    ev.stopPropagation();

    if (this.PestoDomUtils.getViewportResolution().size <= 480) {
      this.mdBottomSheet_.show({
        templateUrl: 'src/detail/view/bottom-sheet-share.html',
        controller: 'BottomSheetShareController',
        controllerAs: 'sheetCtrl',
        locals: {
          items: this.menuItems
        },
        targetEvent: ev
      }).then((clickedItem) => {
        this.alert = clickedItem['name'] + ' clicked!';
      });
    } else {
      $mdOpenMenu(ev);
    }      
  }

  isFavorite() {
    const favoriteIds = this.userSettings.favoriteRecipeIds;
    return !!(favoriteIds && this.recipe && favoriteIds[this.recipe.id]);
  }

  toggleFavorite(ev) {
    ev.stopPropagation();
    let favoriteIds = this.userSettings.favoriteRecipeIds;
    // Fortunately, an empty object is true.
    if (favoriteIds && this.recipe) {
      if (favoriteIds[this.recipe.id]) {
        delete favoriteIds[this.recipe.id];
      } else {
        favoriteIds[this.recipe.id] = true;
      }
      this.SettingsStorage.saveSettings(this.userSettings);
    }
  }
}

RecipeDetailController.$inject = [
  '$location', '$routeParams', '$mdBottomSheet', 'PestoDomUtils', 'RecipeStorage', 'SettingsStorage'
];

export default RecipeDetailController;
