// Simple service holding static item data.
class ItemsService {
  constructor() {
    let LOREM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mauris dolor, euismod ut libero et, suscipit porttitor lacus. Donec vitae consequat mauris. Proin metus lacus, euismod scelerisque ultricies in, porttitor quis ex. Suspendisse tempus eget tortor in ultricies."
    
    function exampleItems() { return {
      meowrio_lopez: {
        name: "Meowrio Lopez",
        url: 'meowrio_lopez',
        img: "assets/cat1.jpg",
        description: LOREM,
        rand: Math.random()
      },
      fuzz_aldrin: { 
        name: "Fuzz Aldrin",
        url: "fuzz_aldrin",
        img: "assets/cat2.jpg",
        description: LOREM,
        rand: Math.random()
      },
      cat_benetar: { 
        name: "Cat Benetar",
        url: "cat_benetar",
        img: "assets/cat3.jpg",
        description: LOREM,
        rand: Math.random()
      },
      chairman_meow: { 
        name: "Chairman Meow",
        url: "chairman_meow",
        img: "assets/cat4.jpg",
        description: LOREM,
        rand: Math.random()
      },
      fleyonce_knowles: { 
        name: "Fleyonce Knowles",
        url: "fleyonce_knowles",
        img: "assets/cat5.jpg",
        description: LOREM,
        rand: Math.random()
      },
      george_bernard_paw: { 
        name: "George Bernard Paw",
        url: "george_bernard_paw",
        img: "assets/cat6.jpg",
        description: LOREM,
        rand: Math.random()
      }
    };
  }
    this.categories = {
      featured: {
        name: 'Featured',
        url: 'featured',
        items: exampleItems()
      },
      latest: {
        name: 'Latest',
        url: 'latest',
        items: exampleItems(),
      },
      furniture: {
        name: 'Furniture',
        url: 'furniture',
        items: exampleItems()
      },
      beauty: {
        name: 'Beauty',
        url: 'beauty',
        items: exampleItems()
      },
      fashion: {
        name: 'Fashion',
        url: 'fashion',
        items: exampleItems()
      },
      food: {
        name: 'Food',
        url: 'food',
        items: exampleItems()
      },
      travel: {
        name: 'Travel',
        url: 'travel',
        items: exampleItems()
      },
      kids: {
        name: 'Kids',
        url: 'kids',
        items: exampleItems()
      }
    }
  };
  
  getItems(categoryName) {
    var items = [];
    angular.forEach(this.categories, function(category) {
      if (!categoryName || categoryName == category.url) {
        angular.forEach(category.items, function(item) {
          item['category'] = category.url;
          items.push(item)
        })
      }
    });
    return items;
  }
}

ItemsService.$inject = [];
export default ItemsService;

