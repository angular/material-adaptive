/**
 * In-memory implementation of recipe store.
 */

import Recipe from 'model/Recipe';

let STORE = {};

STORE[1] = Recipe.fromJson({
  id: 1,
  name: 'Pesto Bruchetta',
  author: 'Alice Jones',
  imageUrl: '/pesto/app/assets/recipe_images/recipe1.jpg',
  description: 'This beautiful sprouts recipe...',
  ingredients: [
    {amount: '2 lbs', description: 'Sprouts'},
    {amount: '3 lbs', description: 'Bacon'},
  ],
  steps: [
    {description: 'Put in oven'},
    {duration: '45 min', description: 'Cook'}
  ],
});

STORE[2] = Recipe.fromJson({
  id: 2,
  name: 'Chocolate chip cookies',
  author: 'Bob Smith',
  imageUrl: '/pesto/app/assets/recipe_images/cat_cookies.jpg',
  description: 'Yummy',
  ingredients: [
    {amount: '2', description: 'Eggs'},
    {amount: '1 lbs', description: 'Flour'},
  ],
  steps: [
    {duration: '3 min', description: 'Stir'},
    {duration: '45 min', description: 'Cook'}
  ],
});

STORE[3] = Recipe.fromJson({
  id: 3,
  name: 'Apple pie',
  author: 'Carol Clark',
  imageUrl: '/pesto/app/assets/recipe_images/recipe2.jpg',
  description: 'Yummy',
  ingredients: [
    {amount: '2', description: 'Eggs'},
    {amount: '1 lb', description: 'Flour'},
  ],
  steps: [
    {duration: '3 min', description: 'Stir'},
    {duration: '45 min', description: 'Cook'}
  ],
});

STORE[4] = Recipe.fromJson({
  id: 4,
  name: 'Belgian waffles',
  author: 'Dave Johnson',
  imageUrl: '/pesto/app/assets/recipe_images/recipe3.jpg',
  description: 'Yummy',
  ingredients: [
    {amount: '2', description: 'Eggs'},
    {amount: '1 lb', description: 'Flour'},
  ],
  steps: [
    {duration: '3 min', description: 'Stir'},
    {duration: '45 min', description: 'Cook'}
  ],
});

STORE[5] = Recipe.fromJson({
  id: 5,
  name: 'Carrot cake',
  author: 'Eve Ellison',
  imageUrl: '/pesto/app/assets/recipe_images/recipe4.jpg',
  description: 'Yummy',
  ingredients: [
    {amount: '2', description: 'Eggs'},
    {amount: '1 lb', description: 'Flour'},
  ],
  steps: [
    {duration: '3 min', description: 'Stir'},
    {duration: '45 min', description: 'Cook'}
  ],
});

STORE[6] = Recipe.fromJson({
  id: 6,
  name: 'Chicken Kiev',
  author: 'Mallory Masters',
  imageUrl: '/pesto/app/assets/recipe_images/recipe5.jpg',
  description: 'Yummy',
  ingredients: [
    {amount: '2', description: 'Eggs'},
    {amount: '1 lb', unit: 'lbs', description: 'Flour'},
  ],
  steps: [
    {duration: '3 min', description: 'Stir'},
    {duration: '45 min', description: 'Cook'}
  ],
});


let nextId = 7;

class RecipeStorage {
  
  constructor($q) {
    this.q_ = $q;
  }
  
  getAllRecipes() {
    let recipes = [];
    Object.keys(STORE).forEach((id) => {
      recipes.push(new Recipe(STORE[id]));
    });
    return this.q_.when(recipes);
  }

  getRecipe(id) {
    return this.q_.when(STORE[id]);
  }

  searchRecipes(search) {
    const searchLower = search.toLowerCase();
    let recipes = [];
    Object.keys(STORE).forEach((id) => {
      const r = STORE[id];
      if (r.name.toLowerCase().indexOf(searchLower) >= 0 ||
          r.description.toLowerCase().indexOf(searchLower) >= 0 ||
          r.author.toLowerCase().indexOf(searchLower) >= 0) {
        recipes.push(new Recipe(r));  
      }
    });
    return this.q_.when(recipes);
  }

  updateRecipe(r) {
    STORE[r.id] = new Recipe(r);
    return this.q_.when();
  }

  saveNewRecipe(r) {
    let newRecipe = new Recipe(r);
    newRecipe.id = nextId;
    STORE[nextId] = newRecipe;
    nextId += 1;
    return this.q_.when();
  }

  deleteRecipe(r) {
    delete STORE[r.id];
    return this.q_.when();
  }
  
}

RecipeStorage.$inject = ['$q'];

export default RecipeStorage;
