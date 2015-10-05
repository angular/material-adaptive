import Recipe from 'model/Recipe';

const EditMode = {
  READ: 1,
  EDIT_EXISTING: 2,
  EDIT_NEW: 3,
};

class RecipeDetailController {
  constructor($scope, $location, $routeParams, $mdMedia, RecipeStorage) {
    $scope.pageClass = 'pesto-detail-page';

    this.location_ = $location;
    this.mdMedia_ = $mdMedia;
    this.recipeStorage_ = RecipeStorage;

    this.editMode = EditMode.READ;
    this.recipe = null;
    this.recipeId = $routeParams['id'];

    // Fetch existing recipe or create a new one.
    if ('new' === this.recipeId) {
      this.recipe = new Recipe();
      this.editMode = EditMode.EDIT_NEW;
    }
    else {
      const id = parseInt(this.recipeId, 10);
      if (id) {
        RecipeStorage.getRecipe(id).then((recipe) => {
          if (recipe) {
            this.recipe = recipe;
          }
          else {
            console.log('Bad recipe id: ' + id);
            $location.path('/home');
          }
        });
      }
      else {
        console.log('Bad recipe id: ' + id);
        $location.path('/home');
      }
    }
  }

  editRecipe() {
    this.originalRecipe = this.recipe;
    this.recipe = this.recipe.copy();
    this.editMode = EditMode.EDIT_EXISTING;
  }

  cancelChanges() {
    if (this.editMode === EditMode.EDIT_NEW) {
      this.goBack();
    } else {
      this.recipe = this.originalRecipe;
      this.editMode = EditMode.READ;
    }
  }

  saveChanges() {
    const doneEditing = () => {
      this.editMode = EditMode.READ;
    };
    switch (this.editMode) {
      case EditMode.EDIT_EXISTING:
        this.recipeStorage_.updateRecipe(this.recipe).then(doneEditing);
        break;
      case EditMode.EDIT_NEW:
        this.recipeStorage_.saveNewRecipe(this.recipe).then(doneEditing);
    }
  }

  isEditing() {
    return this.editMode === EditMode.EDIT_EXISTING || this.editMode === EditMode.EDIT_NEW;
  }

  goBack() {
    this.location_.path('/home');
  }
}

RecipeDetailController.$inject = ['$scope', '$location', '$routeParams', '$mdMedia', 'RecipeStorage'];

export default RecipeDetailController;
