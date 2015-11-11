// Simple service holding static item data.
class ItemsService {
  constructor() {
    this.cacheItems = {};
    this.categories = [
      {
        name: 'Featured',
        url: 'featured',
      },
      {
        name: 'Furniture',
        url: 'furniture',
      },
      {
        name: 'Fashion',
        url: 'fashion',
      },
      {
        name: 'Food',
        url: 'food',
      },
      {
        name: 'Kids',
        url: 'kids'
      },
      {
        name: 'Outdoors',
        url: 'outdoors',
      },
      {
        name: 'Tools',
        url: 'tools',
      }
    ];
    this.items = [
      {
        category: 'furniture',
        url: 'green_chair',
        img: '//www.gstatic.com/angular/material-adaptive/shrine/green_chair.jpg',
        name: 'Green Chair',
        description: 'This is a green chair',
        featured: false
      },
      {
        category: 'kids',
        url: 'fish_bowl',
        img: '//www.gstatic.com/angular/material-adaptive/shrine/fish_bowl.jpg',
        name: 'Fish Bowl',
        description: 'This is a fish bowl.',
        featured: true
      },
      {
        category: 'fashion',
        url: 'lipstick',
        img: '//www.gstatic.com/angular/material-adaptive/shrine/lipstick.jpg',
        name: 'Lipstick',
        description: 'These are tubes of lipstick.',
        featured: false
      },
      {
        category: 'food',
        url: 'popsicle',
        img: '//www.gstatic.com/angular/material-adaptive/shrine/popsicle.jpg',
        name: 'Popsicle',
        description: 'This is a red popsicle',
        featured: true
      },
      {
        category: 'kids',
        url: 'backpack',
        img: '//www.gstatic.com/angular/material-adaptive/shrine/backpack.jpg',
        name: 'Backpack',
        description: 'This is a backpack',
        featured: true
      },
      {
        category: 'kids',
        url: 'beach_ball',
        img: '//www.gstatic.com/angular/material-adaptive/shrine/beach_ball.jpg',
        name: 'Beach Ball',
        description: 'This is a beach ball',
        featured: false
      },
      {
        category: 'outdoors',
        url: 'binoculars',
        img: '//www.gstatic.com/angular/material-adaptive/shrine/binoculars.jpg',
        name: 'Binoculars',
        description: 'This is a pair of binoculars',
        featured: false
      },
      {
        category: 'furniture',
        url: 'clock',
        img: '//www.gstatic.com/angular/material-adaptive/shrine/clock.jpg',
        name: 'Clock',
        description: 'This is a clock',
        featured: false
      },
      {
        category: 'outdoors',
        url: 'flippers',
        img: '//www.gstatic.com/angular/material-adaptive/shrine/flippers.jpg',
        name: 'Flippers',
        description: 'This is a pair of flippers',
        featured: false
      },
      {
        category: 'fashion',
        url: 'green_shoes',
        img: '//www.gstatic.com/angular/material-adaptive/shrine/green_shoes.jpg',
        name: 'Green Shoes',
        description: 'This is a pair of green shoes',
        featured: false
      },
      {
        category: 'outdoors',
        url: 'helmet',
        img: '//www.gstatic.com/angular/material-adaptive/shrine/helmet.jpg',
        name: 'Helmet',
        description: 'This is a helmet.',
        featured: true
      },
      {
        category: 'furniture',
        url: 'lamp',
        img: '//www.gstatic.com/angular/material-adaptive/shrine/lamp.jpg',
        name: 'Lamp',
        description: 'This is a lamp',
        featured: false
      },
      {
        category: 'furniture',
        url: 'lawn_chair',
        img: '//www.gstatic.com/angular/material-adaptive/shrine/lawn_chair.jpg',
        name: 'Lawn Chair',
        description: 'This is a lawn chair',
        featured: false
      },
      {
        category: 'tools',
        url: 'paintbrush',
        img: '//www.gstatic.com/angular/material-adaptive/shrine/paintbrush.jpg',
        name: 'Paintbrush',
        description: 'This is a paintbrush',
        featured: false
      },
      {
        category: 'tools',
        url: 'pen',
        img: '//www.gstatic.com/angular/material-adaptive/shrine/pen.jpg',
        name: 'Pen',
        description: 'This is a pen',
        featured: false
      },
      {
        category: 'furniture',
        url: 'radio',
        img: '//www.gstatic.com/angular/material-adaptive/shrine/radio.jpg',
        name: 'Radio',
        description: 'This is a radio',
        featured: false
      },
      {
        category: 'furniture',
        url: 'red_typewriter',
        img: '//www.gstatic.com/angular/material-adaptive/shrine/red_typewriter.jpg',
        name: 'Red Typewriter',
        description: 'This is a red typewriter',
        featured: false
      },
      {
        category: 'fashion',
        url: 'shoes',
        img: '//www.gstatic.com/angular/material-adaptive/shrine/shoes.jpg',
        name: 'Shoes',
        description: 'This is a pair of shoes',
        featured: false
      },
      {
        category: 'fashion',
        url: 'sunglasses',
        img: '//www.gstatic.com/angular/material-adaptive/shrine/sunglasses.jpg',
        name: 'sunglasses',
        description: 'This is a pair of sunglasses',
        featured: false
      },
      {
        category: 'outdoors',
        url: 'surfboard',
        img: '//www.gstatic.com/angular/material-adaptive/shrine/surfboard.jpg',
        name: 'Surfboard',
        description: 'This is a surfboard',
        featured: false
      },
      {
        category: 'food',
        url: 'teapot',
        img: '//www.gstatic.com/angular/material-adaptive/shrine/teapot.jpg',
        name: 'Teapot',
        description: 'This is a teapot',
        featured: false
      },
      {
        category: 'outdoors',
        url: 'tent',
        img: '//www.gstatic.com/angular/material-adaptive/shrine/tent.jpg',
        name: 'Tent',
        description: 'This is a tent',
        featured: false
      },
      {
        category: 'tools',
        url: 'tools',
        img: '//www.gstatic.com/angular/material-adaptive/shrine/tools.jpg',
        name: 'Tools',
        description: 'This is a set of tools',
        featured: false
      },
      {
        category: 'fashion',
        url: 'umbrella',
        img: '//www.gstatic.com/angular/material-adaptive/shrine/umbrella.jpg',
        name: 'Umbrella',
        description: 'This is an umbrella',
        featured: false
      }
    ];
  };
  
  /**
   * Retrieves items from the item list based on the category name.
   * Currently returns all items from item list with the items matching
   * the category appearing first in the returned item array.
   * 
   * @param categoryName The name of the category searched for.
   */
  getItems(categoryName) {
    function shuffle(array) {
        var counter = array.length, temp, index;
        for (var i = array.length - 1; i > 0; i--) {
            index = Math.floor(Math.random() * counter);
            counter--;
            temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
        return array;
    }
    if (!categoryName) return this.items;
    categoryName = categoryName.toLowerCase();
    var fromCache = this.cacheItems[categoryName];
    if (fromCache) {
      return fromCache;
    }
    var matchedItems = [];
    var unmatchedItems = [];
    this.items.forEach(function(item) {
      if ((item.featured == true && categoryName == 'featured') ||
          item.category == categoryName) {
        matchedItems.push(item);
      } else {
        unmatchedItems.push(item);
      }
    });
    var items = matchedItems.concat(shuffle(unmatchedItems));

    this.cacheItems[categoryName] = items;
    return items;
  }
}

ItemsService.$inject = [];
export default ItemsService;
