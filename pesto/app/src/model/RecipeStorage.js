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
  author: 'Peter Carlsson',
  mainImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/image2-01.png',
  ingredientsImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/quick.png',
  description: 'Bask in greens this season by trying this delightful take on traditional bruschetta. Top with a dollop of homemade pesto, and season with freshly ground sea salt and pepper.',
  ingredients: [
    {amount: '6 pieces', description: 'Mozzarella cheese'},
    {amount: '6 pieces', description: 'Toasts'},
    {amount: '⅔ cup', description: 'Homemade pesto'},
    {amount: '1tbsp', description: 'Freshly ground pepper'},
    {amount: '1 tsp', description: 'Salt'},
  ],
  steps: [
    {description: 'Put in oven'},
    {duration: '45 min', description: 'Cook'}
  ],
});

STORE[2] = Recipe.fromJson({
  id: 2,
  dateCreated: new Date(2015, 0, 29),
  name: 'Rustic purple mash',
  author: 'Trevor Hansen',
  mainImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/blue-potato.jpg',
  ingredientsImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/veggie.png',
  description: 'Abundant in color, and healthy, delicious goodness, cooking with these South American purple potatoes is a treat. Boil, mash, bake, or roast them. For taste cook with chicken stock, and a dash of extra virgin olive oil.',
  ingredients: [
    {amount: '2 lbs', description: 'Purple potatoes, skin on'},
    {amount: '1 tsp', description: 'Salt'},
    {amount: '2 tsp', description: 'Lemon'},
    {amount: '4 cups', description: 'Chicken stock'},
    {amount: '1tbsp', description: 'Extra virgin olive oil'}
  ],
  steps: [
    {duration: '3 min', description: 'Stir'},
    {duration: '45 min', description: 'Cook'}
  ],
});

STORE[3] = Recipe.fromJson({
  id: 3,
  dateCreated: new Date(2015, 0, 28),
  name: 'Bacon Sprouts',
  author: 'Ali Connors',
  mainImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/image1-01.png',
  ingredientsImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/main.png',
  description: 'This beautiful sprouts recipe is the most glorious side dish on a cold winter’s night. Construct it with bacon or fake-on, but always make sure the sprouts are deliciously seasoned and appropriately sautéed.',
  ingredients: [
    {amount: '2 lbs', description: 'Brussel sprouts'},
    {amount: '3 lbs', description: 'Bacon'},
    {amount: '⅔ cup', description: 'Shaved parmesan cheese'},
    {amount: '1tbsp', description: 'Extra virgin olive oil'},
    {amount: '1 tsp', description: 'Lemon juice'},
    {amount: '1/2 cup', description: 'Sun dried tomatoes'},
  ],
  steps: [
    {duration: '3 min', description: 'Stir'},
    {duration: '45 min', description: 'Cook'}
  ],
});

STORE[4] = Recipe.fromJson({
  id: 4,
  dateCreated: new Date(2015, 0, 27),
  name: 'Oven Sausage',
  author: 'Sandra Adams',
  mainImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/sausage.jpg',
  ingredientsImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/meat.png',
  description: 'Robust cuts of portuguese sausage add layers of flavour. Bake or fry until sausages are slightly browned and with a crispy skin. Serve warm and with cuts of pineapple for a delightful mix of sweet and savory flavour. This is the perfect dish after a swim in the sea.',
  ingredients: [
    {amount: '1 1/2 lbs', description: 'Linguisa'},
    {amount: '1 lbs', description: 'Pineapple or other fresh citrus fruit'},
  ],
  steps: [
    {duration: '3 min', description: 'Stir'},
    {duration: '45 min', description: 'Cook'}
  ],
});

STORE[5] = Recipe.fromJson({
  id: 5,
  dateCreated: new Date(2015, 0, 25),
  name: 'Chicken tostadas',
  author: 'Peter Carlsson',
  mainImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/image5.png',
  ingredientsImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/spicy.png',
  description: 'Crisp flavours and a bit of spice make this roasted chicken dish an easy go to when cooking for large groups. Top with Baja sauce for an extra kick of spice.',
  ingredients: [
    {amount: '4-6', description: 'Small corn tortillas'},
    {amount: '½ cup', description: 'Chopped onion'},
    {amount: '⅔', description: 'Cream'},
    {amount: '3-4oz', description: 'Roasted, shredded chicken breast'},
  ],
  steps: [
    {duration: '3 min', description: 'Stir'},
    {duration: '45 min', description: 'Cook'}
  ],
});

STORE[6] = Recipe.fromJson({
  id: 6,
  dateCreated: new Date(2015, 0, 25),
  name: 'Coconut rice',
  author: 'Ali Connors',
  mainImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/white-rice.jpg',
  ingredientsImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/healthy.png',
  description: 'This dish is a terrific pairing to almost any main. Bonus- it’s quick, easy to make, and turns even the simplest of dishes into a delicacy. Sweet coconut cream will leave your mouth watering, with yummy caramelized  flecks of rice adding an extra bit of taste. Fluff with fork before serving for best results.',
  ingredients: [
    {amount: '2 cups', description: 'Jasmine rice'},
    {amount: '1 1/2 cups', description: 'Water'},
    {amount: '1 cup', description: 'Coconut milk'},
    {amount: '1 1/2 tbsp', description: 'Sugar'},
    {amount: '1tsp', description: 'Salt'},
  ],
  steps: [
    {duration: '3 min', description: 'Stir'},
    {duration: '45 min', description: 'Cook'}
  ],
});

STORE[7] = Recipe.fromJson({
  id: 7,
  dateCreated: new Date(2015, 0, 25),
  name: 'Gin basil cocktail',
  author: 'Trevor Hansen',
  mainImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/IMG_5447.jpg',
  ingredientsImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/quick.png',
  description: 'This mellow and herb filled blending of simple ingredients is easy enough to mix that a novice host will feel like a seasoned bartender. Top with crushed basil, shake or stir.',
  ingredients: [
    {amount: '3 parts', description: 'Gin'},
    {amount: '1 part', description: 'Fresh lemon juice'},
    {amount: '½ part', description: 'Simple syrup'},
    {amount: '5', description: 'Basil leaves, crushed'},
  ],
  steps: [
    {duration: '3 min', description: 'Stir'},
    {duration: '45 min', description: 'Cook'}
  ],
});

STORE[8] = Recipe.fromJson({
  id: 8,
  dateCreated: new Date(2015, 0, 25),
  name: 'Seared sesame fish',
  author: 'Ali Connors',
  mainImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/fish-steaks.jpg',
  ingredientsImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/fish.png',
  description: 'Cuts of fish like this are perfect for simple searing with bright flavours. Try Sesame seeds on these fillets for crusty skin filled with crunch. For added flavour try dipping in a homemade ponzu sauce - delicious.',
  ingredients: [
    {amount: '1 ½ lbs', description: 'Thin fish fillets'},
    {amount: '1 lb', description: 'Salt and black pepper to taste'},
    {amount: '3/4 cup', description: 'Sesame seeds'},
    {amount: '2tbsp', description: 'Sesame oil'},
    {amount: '1tbsp', description: 'Lime juice'},
    {amount: '2 tbsp', description: 'Soy sauce'},
  ],
  steps: [
    {duration: '3 min', description: 'Stir'},
    {duration: '45 min', description: 'Cook'}
  ],
});

STORE[9] = Recipe.fromJson({
  id: 9,
  dateCreated: new Date(2015, 0, 25),
  name: 'Herb artichoke',
  author: 'Sandra Adams',
  mainImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/IMG_5438.png',
  ingredientsImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/healthy.png',
  description: 'This tasty and healthy veggie is a favorite. Artichoke like this can be paired with a hearty main or works well as a small meal with some white wine on the side. Simple and fresh, all foodies love tasty artichoke.',
  ingredients: [
    {amount: '1', description: 'Small garlic clove, peeled'},
    {amount: '2', description: 'Whole  artichokes'},
    {amount: '4 tbsp', description: 'Fresh lemon juice'},
    {amount: '4 tbsp', description: 'Unsalted butter'},
    {amount: '2 tbsp', description: 'Extra-virgin olive oil'},
    {amount: '1⁄4 tsp', description: 'Freshly ground black pepper'},
  ],
  steps: [
    {duration: '3 min', description: 'Stir'},
    {duration: '45 min', description: 'Cook'}
  ],
});

STORE[10] = Recipe.fromJson({
  id: 10,
  dateCreated: new Date(2015, 0, 25),
  name: 'Pesto bruschetta',
  author: 'Trevor Hansen',
  mainImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/IMG_5332.png',
  ingredientsImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/veggie.png',
  description: 'Life is good when you add amazingly warm bread, fresh pesto sauce, and roasted tomatoes to the table. This a  classic starter to break out in a pinch. It’s easy to make and extra tasty.',
  ingredients: [
    {amount: '1 loaf', description: 'Sliced French bread'},
    {amount: '½ cup', description: 'Cheese'},
    {amount: '1 cup', description: 'Heirloom tomatoes'},
    {amount: '1 cup', description: 'Fresh basil'},
    {amount: '1 clove', description: 'Garlic '},
    {amount: '½ tbsp', description: 'Olive oil'},
    {amount: '3tsp', description: 'White wine vinegar'},
    {amount: '¼ tsp', description: 'Sea salt'},
  ],
  steps: [
    {duration: '3 min', description: 'Stir'},
    {duration: '45 min', description: 'Cook'}
  ],
});

STORE[11] = Recipe.fromJson({
  id: 11,
  dateCreated: new Date(2015, 0, 25),
  name: 'Garlic bok choy',
  author: 'Sandra Adams',
  mainImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/bok-choy.jpg',
  ingredientsImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/spicy.png',
  description: 'Great stir-fried bok choy starts at the market. For me, nothing says tasty like garlic and baby bok choy. Choose fresh, crisp greens. Once home, wash, chop, and then ready for the wok.  No family style spread is complete without these greens.',
  ingredients: [
    {amount: '1/2 cup', description: 'Chick broth'},
    {amount: '1 tbsp', description: 'Soy sauce'},
    {amount: '¼ cup', description: 'Sliced garlic'},
    {amount: '2-3 lbs', description: 'Bok choy'},
    {amount: '2 tsp', description: 'Sesame oil'},
  ],
  steps: [
    {duration: '3 min', description: 'Stir'},
    {duration: '45 min', description: 'Cook'}
  ],
});

STORE[12] = Recipe.fromJson({
  id: 12,
  dateCreated: new Date(2015, 0, 25),
  name: 'Fresh Fettuccine',
  author: 'Ali Connors',
  mainImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/pasta.png',
  ingredientsImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/main.png',
  description: 'Satisfy a need for rich, creamy homemade goodness with this classic. Creamy fettuccine alfredo will have you hitting the gym the next day, but it’s so good it’s worth it.',
  ingredients: [
    {amount: '¾ cup', description: 'Milk'},
    {amount: '1 ½ tsp', description: 'Salt'},
    {amount: '1 tbsp', description: 'Olive oil'},
    {amount: '8oz', description: 'Fettuccine'},
    {amount: '½ cup', description: 'Fresh basil'},
    {amount: '½ cup', description: 'Fresh ground pepper'},
  ],
  steps: [
    {duration: '3 min', description: 'Stir'},
    {duration: '45 min', description: 'Cook'}
  ],
});

STORE[13] = Recipe.fromJson({
  id: 13,
  dateCreated: new Date(2015, 0, 25),
  name: 'Sicilian-Style sardines',
  author: 'Peter Carlsson',
  mainImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/IMG_0575.jpg',
  ingredientsImageUrl: 'http://www.gstatic.com/angular/material-adaptive/pesto/quick.png',
  description: 'My go to way to eat sardines is with a splash of tangy lemon and fresh fennel drizzled on top. The best thing about this dish is the flavour it packs. Prepaid with wild caught sardines or canned.',
  ingredients: [
    {amount: '1/4 cup', description: 'Dry white wine'},
    {amount: '1', description: 'Finely chopped shallot'},
    {amount: '2 tbsp', description: 'Fresh lemon juice'},
    {amount: '1 tbsp', description: 'Fennel seeds, crushed'},
    {amount: '4 tbsp', description: 'Extra virgin olive oil, to taste'},
    {amount: '2 cans', description: 'Sardines in oil, drained'},
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
