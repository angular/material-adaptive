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
        img: 'assets/images/green_chair.jpg',
        name: 'Green Chair',
        description: 'This is a green chair',
        featured: false
      },
      {
        category: 'kids',
        url: 'fish_bowl',
        img: 'assets/images/fish_bowl.jpg',
        name: 'Fish Bowl',
        description: 'This is a fish bowl.',
        featured: true
      },
      {
        category: 'fashion',
        url: 'lipstick',
        img: 'assets/images/lipstick.jpg',
        name: 'Lipstick',
        description: 'These are tubes of lipstick.',
        featured: false
      },
      {
        category: 'food',
        url: 'popsicle',
        img: 'assets/images/popsicle.jpg',
        name: 'Popsicle',
        description: 'This is a red popsicle',
        featured: true
      },
      {
        category: 'kids',
        url: 'backpack',
        img: 'assets/images/backpack.jpg',
        name: 'Backpack',
        description: 'This is a backpack',
        featured: true
      },
      {
        category: 'kids',
        url: 'beach_ball',
        img: 'assets/images/beach_ball.jpg',
        name: 'Beach Ball',
        description: 'This is a beach ball',
        featured: false
      },
      {
        category: 'outdoors',
        url: 'binoculars',
        img: 'assets/images/binoculars.jpg',
        name: 'Binoculars',
        description: 'This is a pair of binoculars',
        featured: false
      },
      {
        category: 'furniture',
        url: 'clock',
        img: 'assets/images/clock.jpg',
        name: 'Clock',
        description: 'This is a clock',
        featured: false
      },
      {
        category: 'outdoors',
        url: 'flippers',
        img: 'assets/images/flippers.jpg',
        name: 'Flippers',
        description: 'This is a pair of flippers',
        featured: false
      },
      {
        category: 'fashion',
        url: 'green_shoes',
        img: 'assets/images/green_shoes.jpg',
        name: 'Green Shoes',
        description: 'This is a pair of green shoes',
        featured: false
      },
      {
        category: 'outdoors',
        url: 'helmet',
        img: 'assets/images/helmet.jpg',
        name: 'Helmet',
        description: 'This is a helmet.',
        featured: true
      },
      {
        category: 'furniture',
        url: 'lamp',
        img: 'assets/images/lamp.jpg',
        name: 'Lamp',
        description: 'This is a lamp',
        featured: false
      },
      {
        category: 'furniture',
        url: 'lawn_chair',
        img: 'assets/images/lawn_chair.jpg',
        name: 'Lawn Chair',
        description: 'This is a lawn chair',
        featured: false
      },
      {
        category: 'tools',
        url: 'paintbrush',
        img: 'assets/images/paintbrush.jpg',
        name: 'Paintbrush',
        description: 'This is a paintbrush',
        featured: false
      },
      {
        category: 'tools',
        url: 'pen',
        img: 'assets/images/pen.jpg',
        name: 'Pen',
        description: 'This is a pen',
        featured: false
      },
      {
        category: 'furniture',
        url: 'radio',
        img: 'assets/images/radio.jpg',
        name: 'Radio',
        description: 'This is a radio',
        featured: false
      },
      {
        category: 'furniture',
        url: 'red_typewriter',
        img: 'assets/images/red_typewriter.jpg',
        name: 'Red Typewriter',
        description: 'This is a red typewriter',
        featured: false
      },
      {
        category: 'fashion',
        url: 'shoes',
        img: 'assets/images/shoes.jpg',
        name: 'Shoes',
        description: 'This is a pair of shoes',
        featured: false
      },
      {
        category: 'fashion',
        url: 'sunglasses',
        img: 'assets/images/sunglasses.jpg',
        name: 'sunglasses',
        description: 'This is a pair of sunglasses',
        featured: false
      },
      {
        category: 'outdoors',
        url: 'surfboard',
        img: 'assets/images/surfboard.jpg',
        name: 'Surfboard',
        description: 'This is a surfboard',
        featured: false
      },
      {
        category: 'food',
        url: 'teapot',
        img: 'assets/images/teapot.jpg',
        name: 'Teapot',
        description: 'This is a teapot',
        featured: false
      },
      {
        category: 'outdoors',
        url: 'tent',
        img: 'assets/images/tent.jpg',
        name: 'Tent',
        description: 'This is a tent',
        featured: false
      },
      {
        category: 'tools',
        url: 'tools',
        img: 'assets/images/tools.jpg',
        name: 'Tools',
        description: 'This is a set of tools',
        featured: false
      },
      {
        category: 'fashion',
        url: 'umbrella',
        img: 'assets/images/umbrella.jpg',
        name: 'Umbrella',
        description: 'This is an umbrella',
        featured: false
      }
    ];
  };
  
  getItems(categoryName) {
    if (!categoryName) return this.items;
    categoryName = categoryName.toLowerCase();
    var fromCache = this.cacheItems[categoryName];
    if (fromCache) {
      return fromCache;
    }
    var items = [];
    this.items.forEach(function(item) {
      if ((item.featured == true && categoryName == 'featured') ||
          item.category == categoryName) {
        items.push(item);
      }
    });
    this.cacheItems[categoryName] = items;
    return items;
  }
}

ItemsService.$inject = [];
export default ItemsService;
