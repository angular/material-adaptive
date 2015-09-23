import Ingredient from 'model/Ingredient';
import Step from 'model/Step';

class Recipe {
  constructor(params) {
    if (!params) params = {};
    this.id = params.id || 0;
    this.name = params.name || '';
    this.author = params.author || '';
    this.imageUrl = params.imageUrl || '';
    this.description = params.description || '';
    this.ingredients = angular.copy(params.ingredients || []);
    this.steps = angular.copy(params.steps || []);
  }

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
      name: json.name,
      author: json.author,
      imageUrl: json.imageUrl,
      ingredients,
      steps,
    })
  }
}

export default Recipe;
