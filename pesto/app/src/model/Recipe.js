import Ingredient from 'model/Ingredient';
import Step from 'model/Step';

class Recipe {
  /**
   * @constructor
   * @param {!Object} params
   */
  constructor(params) {
    if (!params) params = {};
    this.id = params.id || 0;
    this.dateCreated = params.dateCreated || new Date();
    this.name = params.name || '';
    this.author = params.author || '';
    this.mainImageUrl = params.mainImageUrl || '';
    this.ingredientsImageUrl = params.ingredientsImageUrl || '';
    this.description = params.description || '';
    this.ingredients = angular.copy(params.ingredients || []);
    this.steps = angular.copy(params.steps || []);
  }

  /**
   * Clones the model.
   * @return {Object}
   */
  copy() {
    return new Recipe({
      id: this.id,
      dateCreated: this.dateCreated,
      name: this.name,
      author: this.author,
      mainImageUrl: this.mainImageUrl,
      ingredientsImageUrl: this.ingredientsImageUrl,
      description: this.description,
      ingredients: this.ingredients,
      steps: this.steps,
    });
  }

  /**
   * Clones a json object.
   * @param {!Object} json
   * @return {Object}
   */
  static fromJson(json) {
    const ingredients = [];
    for (let i of json.ingredients) {
      ingredients.push(new Ingredient(i));
    }
    const steps = [];
    for (let s of json.steps) {
      steps.push(new Step(s));
    }
    return new Recipe({
      id: json.id,
      dateCreated: json.dateCreated,
      name: json.name,
      description: json.description,
      author: json.author,
      mainImageUrl: json.mainImageUrl,
      ingredientsImageUrl: json.ingredientsImageUrl,
      ingredients,
      steps,
    })
  }
}

export default Recipe;
