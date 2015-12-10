/**
 * In-memory implementation of recipe store.
 */

import Recipe from 'model/Recipe';

let STORE = {};

// The default sort order is descending by dateCreated, so these are listed in
// the order that they appear on the home page.
STORE[1] = Recipe.fromJson({
  id: 1,
  dateCreated: new Date(2015, 0, 30),
  name: 'Pesto Bruchetta',
  author: 'Alice Jones',
  mainImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/image2-01.png',
  ingredientsImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/quick.png',
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
  dateCreated: new Date(2015, 0, 29),
  name: 'Chocolate cookies',
  author: 'Bob Smith',
  mainImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/blue-potato.jpg',
  ingredientsImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/veggie.png',
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
  dateCreated: new Date(2015, 0, 28),
  name: 'Apple pie',
  author: 'Carol Clark',
  mainImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/image1-01.png',
  ingredientsImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/main.png',
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
  dateCreated: new Date(2015, 0, 27),
  name: 'Belgian waffles',
  author: 'Dave Johnson',
  mainImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/sausage.jpg',
  ingredientsImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/meat.png',
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
  dateCreated: new Date(2015, 0, 25),
  name: 'Chicken Kiev',
  author: 'Mallory Masters',
  mainImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/white-rice.jpg',
  ingredientsImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/healthy.png',
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

STORE[6] = Recipe.fromJson({
  id: 6,
  dateCreated: new Date(2015, 0, 25),
  name: 'Chicken Kiev',
  author: 'Mallory Masters',
  mainImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/IMG_5447.jpg',
  ingredientsImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/veggie.png',
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

STORE[7] = Recipe.fromJson({
  id: 7,
  dateCreated: new Date(2015, 0, 25),
  name: 'Chicken Kiev',
  author: 'Mallory Masters',
  mainImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/fish-steaks.jpg',
  ingredientsImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/fish.png',
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

STORE[8] = Recipe.fromJson({
  id: 8,
  dateCreated: new Date(2015, 0, 25),
  name: 'Chicken Kiev',
  author: 'Mallory Masters',
  mainImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/IMG_5438.jpg',
  ingredientsImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/main.png',
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

STORE[9] = Recipe.fromJson({
  id: 9,
  dateCreated: new Date(2015, 0, 25),
  name: 'Chicken Kiev',
  author: 'Mallory Masters',
  mainImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/IMG_5332.jpg',
  ingredientsImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/quick.png',
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

STORE[10] = Recipe.fromJson({
  id: 10,
  dateCreated: new Date(2015, 0, 25),
  name: 'Chicken Kiev',
  author: 'Mallory Masters',
  mainImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/bok-choy.jpg',
  ingredientsImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/spicy.png',
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

STORE[11] = Recipe.fromJson({
  id: 11,
  dateCreated: new Date(2015, 0, 25),
  name: 'Pesto Kiev',
  author: 'Mallory Masters',
  mainImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/pasta.png',
  ingredientsImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/main.png',
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

STORE[12] = Recipe.fromJson({
  id: 12,
  dateCreated: new Date(2015, 0, 25),
  name: 'Pesto Bruchetta',
  author: 'Mallory Masters',
  mainImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/IMG_0575.jpg',
  ingredientsImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/fish.png',
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


let nextId = 14;

class RecipeStorage {
  
  constructor($q) {
    this.q_ = $q;
  }
  
  getAllRecipes() {
    let recipes = [];
    Object.keys(STORE).forEach((id) => {
      recipes.push(new Recipe(STORE[id]));
    });
    // Return by descending date, so newer recipes show up first.
    recipes.sort((r1, r2) => r2.dateCreated - r1.dateCreated);
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
    // Would be better if there were an injectable service to get current date.
    newRecipe.dateCreated = new Date();
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
