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
        name: 'Beauty',
        url: 'beauty',
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
        name: 'Travel',
        url: 'travel',
      },
      {
        name: 'Kids',
        url: 'kids'
      }
    ];
    this.items = [
      {
        category: 'travel',
        url: 'kayaks',
        img: 'assets/images/kayaks.jpg',
        name: 'Kayaks',
        description: 'These are Kayaks.',
        featured: false
      },
      {
        category: 'fashion',
        url: 'high_tops',
        img: 'assets/images/high_tops.jpg',
        name: 'Red High Top Shoes',
        description: 'These are red shoes.',
        featured: false
      },
      {
        category: 'travel',
        url: 'fishing',
        img: 'assets/images/fishing.jpg',
        name: 'Fishing',
        description: 'This is fishing',
        featured: true
      },
      {
        category: 'travel',
        url: 'beach',
        img: 'assets/images/beach.jpg',
        name: 'Beach',
        description: 'This is what a beach looks like',
        featured: false
      },
      {
        category: 'fashion',
        url: 'blue_heels',
        img: 'assets/images/blue_heels.jpg',
        name: 'Blue Heels',
        description: 'These are blue shoes',
        featured: true
      },
      {
        category: 'furniture',
        url: 'green_chair',
        img: 'assets/images/green_chair.jpg',
        name: 'Green Chair',
        description: 'This is a green chair',
        featured: false
      },
      {
        category: 'travel',
        url: 'snowboarding',
        img: 'assets/images/snowboarding.jpg',
        name: 'Snowboarding',
        description: 'This is snowboarding',
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
        category: 'furniture',
        url: 'welding',
        img: 'assets/images/welding.jpg',
        name: 'Welding',
        description: 'This is welding',
        featured: false
      },
      {
        category: 'kids',
        url: 'horse',
        img: 'assets/images/horse.jpg',
        name: 'Horse',
        description: 'This is a horse',
        featured: false
      },
      {
        category: 'kids',
        url: 'cow',
        img: 'assets/images/cow.jpg',
        name: 'Cow',
        description: 'This is a cow',
        featured: false
      },
      {
        category: 'beauty',
        url: 'lipstick',
        img: 'assets/images/lipstick.jpg',
        name: 'Lipstick',
        description: 'These are tubes of lipstick.',
        featured: true
      },
      {
        category: 'travel',
        url: 'skiing',
        img: 'assets/images/skiing.jpg',
        name: 'Skiing',
        description: 'This is skiing',
        featured: false
      },
      {
        category: 'furniture',
        url: 'typewriter',
        img: 'assets/images/typewriter.jpg',
        name: 'Typewriter',
        description: 'This is a typewriter',
        featured: false
      },
      {
        category: 'food',
        url: 'popsicle',
        img: 'assets/images/popsicle.jpg',
        name: 'Popsicle',
        description: 'This is a red popsicle',
        featured: true
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
