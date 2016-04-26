import SETTINGS from './SettingsStorage';
import RECIPES from './RecipeStorage';

class Data {

  constructor($q) {
    this._$q = $q;
    this._settings = SETTINGS;
    this._recipes = RECIPES;
    this.recipeNextId = this._recipes.length;
  }

  // Simulate async reads and writes by returning promises.
  readSettings() {
    return this._$q.when(angular.copy(this._settings));
  }

  saveSettings(settings) {
    this._settings = angular.copy(settings);
    return this._$q.when();
  }

  /**
   *  Loads the Recipe items
   */
  loadRecipes() {
    return this._$q.when(this._recipes);
  }

  /**
   *  Returns the recipe items sorted by created date.
   */
  getAllRecipes() {
    let recipes = [];
    this._recipes.forEach((r, idx) => {
      recipes.push(Object.assign({}, r));
    });

    // Return by descending date, so newer recipes show up first.
    recipes.sort((r1, r2) => r2.dateCreated - r1.dateCreated);
    return this._$q.when(recipes);
  }

  getRecipe(id) {
    return this._$q.when(this._recipes.find(r => r.id === parseInt(id)));
  }

  searchRecipes(search) {
    const searchLower = search.toLowerCase();
    let recipes = [];
    this._recipes.forEach((r, idx) => {
      if (r.name.toLowerCase().indexOf(searchLower) >= 0 ||
          r.description.toLowerCase().indexOf(searchLower) >= 0 ||
          r.author.toLowerCase().indexOf(searchLower) >= 0) {
        recipes.push(Object.assign({}, r));
      }
    });

    return this._$q.when(recipes);
  }

  updateRecipe(r) {
    this._recipes[r.id] = Object.assign({}, r);
    return this._$q.when();
  }

  saveNewRecipe(r) {
    let newRecipe = Object.assign({}, r);
    newRecipe.id = this.recipeNextId;
    // Would be better if there were an injectable service to get current date.
    newRecipe.dateCreated = new Date();
    this._recipes[this.recipeNextId] = newRecipe;
    this.recipeNextId = this.recipeNextId + 1;
    return this._$q.when();
  }

  deleteRecipe(r) {
    delete this._recipes[r.id];
    return this._$q.when();
  }
}

Data.$inject = [ '$q' ];

export default Data;
