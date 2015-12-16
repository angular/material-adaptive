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
        name: 'Green Comfort Chair',
        description: 'The Green Comfort Chair by Green Chair People is a great way to sit in any office. Green Comfort chair makes a nice accent to any room.',
        featured: false
      },
      {
        category: 'kids',
        url: 'fish_bowl',
        img: '//www.gstatic.com/angular/material-adaptive/shrine/fish_bowl.jpg',
        name: 'Perfect Goldfish Bowl',
        description: 'The Perfect Bowl Co makes the best bowls for just about anything you can think of. This Perfect Goldfish Bowl holds water and fish perfectly. Looks great in living rooms. Keep out of reach from cats.',
        featured: true
      },
      {
        category: 'fashion',
        url: 'lipstick',
        img: '//www.gstatic.com/angular/material-adaptive/shrine/lipstick.jpg',
        name: 'Red Lipstick Set',
        description: 'Trying to find the perfect shade to match your mood? Try no longer. Red Lipstick Set by StickLips has you covered for those nights when you need to get out, or even if you’re just headed to work.',
        featured: false
      },
      {
        category: 'food',
        url: 'popsicle',
        img: '//www.gstatic.com/angular/material-adaptive/shrine/popsicle.jpg',
        name: 'Red Popsicle',
        description: 'Looks can be deceiving. This Red Popsicle comes in a wide variety of flavors, including strawberry, that burst as soon as it hits the mouth. Red Popsicles melt slow, so savor the flavor.',
        featured: true
      },
      {
        category: 'kids',
        url: 'backpack',
        img: '//www.gstatic.com/angular/material-adaptive/shrine/backpack.jpg',
        name: 'Backpack',
        description: 'This backpack by Bags ‘n’ stuff can hold just about anything: a laptop, a pen, a protractor, notebooks, small animals, plugs for your devices, sunglasses, gym clothes, shoes, gloves, two kittens, and even lunch!',
        featured: true
      },
      {
        category: 'fashion',
        url: 'green_shoes',
        img: '//www.gstatic.com/angular/material-adaptive/shrine/green_shoes.jpg',
        name: 'Green Slip-ons',
        description: 'Feetsy has been making extraordinary slip-ons for decades. With each pair of shoes purchased Feetsy donates a pair to those in need. Buy yourself a pair, buy someone else a pair. Very Comfortable.',
        featured: false
      },
      {
        category: 'outdoors',
        url: 'helmet',
        img: '//www.gstatic.com/angular/material-adaptive/shrine/helmet.jpg',
        name: 'Half Shield Helmet',
        description: 'Half Shield is the right helmet for those warm summer days on the road. Dot approved, these helmets have been rigorously tested. Keep that noggin protected.',
        featured: true
      },
      {
        category: 'kids',
        url: 'beach_ball',
        img: '//www.gstatic.com/angular/material-adaptive/shrine/beach_ball.jpg',
        name: 'Beachball',
        description: 'Are you at a baseball game and feeling bored? At a pool party and looking for a laugh? Do you need something to take your anger out on? Beachball, by inflatable fun, is the perfect outlet.',
        featured: false
      },
      {
        category: 'outdoors',
        url: 'binoculars',
        img: '//www.gstatic.com/angular/material-adaptive/shrine/binoculars.jpg',
        name: 'Old Binoculars',
        description: 'These Binoculars by See Through are amazing and can make things that are really far away seem like they’re right in front of you. Bring them to the beach. Now you can buy the cheap seats at the big game and feel like you’re right in the action.',
        featured: false
      },
      {
        category: 'furniture',
        url: 'clock',
        img: '//www.gstatic.com/angular/material-adaptive/shrine/clock.jpg',
        name: 'Clock',
        description: 'Timekeeper Co makes clocks that tell time precisely. Clock is very simple to use, set the time using your phone, hang it, and viola! You’ll never be late again.',
        featured: false
      },
      {
        category: 'outdoors',
        url: 'flippers',
        img: '//www.gstatic.com/angular/material-adaptive/shrine/flippers.jpg',
        name: 'Lime Flippers',
        description: 'Flippers are a nice tool to have when you’re being chased by an oversized sea turtle. Never get caught again with these fast water shoes. You’re like a fish, but more graceful.',
        featured: false
      },
      
      {
        category: 'furniture',
        url: 'lamp',
        img: '//www.gstatic.com/angular/material-adaptive/shrine/lamp.jpg',
        name: 'Yellow Desk Lamp',
        description: 'It’s the lamp color you’ve been asking for. Yellow. This lamp looks like a lemon, but with the middle of it missing. It will look great on your desk or in your home office.',
        featured: false
      },
      {
        category: 'furniture',
        url: 'folding_chair',
        img: '//www.gstatic.com/angular/material-adaptive/shrine/lawn_chair.jpg',
        name: 'Folding Chair',
        description: 'The best thing about this chair is that it folds up flat! You can stack so many chairs when they’re flat. Bring it to your lawn, unfold it, sit in it, and just chill for optimal user experience.',
        featured: false
      },
      {
        category: 'tools',
        url: 'paintbrush',
        img: '//www.gstatic.com/angular/material-adaptive/shrine/paintbrush.jpg',
        name: 'Dipped Brush',
        description: 'WeDipIt does it again. This handle dipped 4 inch brush is a perfect for painting 4 inch lines, or coloring in big areas with paint. Just be sure you don’t drop it in a bucket of red paint, then it won’t look dipped anymore.',
        featured: false
      },
      {
        category: 'tools',
        url: 'pen',
        img: '//www.gstatic.com/angular/material-adaptive/shrine/pen.jpg',
        name: 'Fountain Pen',
        description: 'Fountain Pen doesn’t just look like a stellar pen… it is a stellar pen. Fountain Pen can be flipped upside down and work as a stylus for your tablet. Just make sure you put the cap on it first, wouldn’t want to get ink on your tablet. That’s right, fountain pen writes on paper and digital tablets! Remember paper?',
        featured: false
      },
      {
        category: 'furniture',
        url: 'radio',
        img: '//www.gstatic.com/angular/material-adaptive/shrine/radio.jpg',
        name: 'Vintage Bluetooth Radio',
        description: 'Isn’t it cool when things look old, but their not. Looks Old But Not makes awesome vintage goods that are super smart. This ol’ radio just got an upgrade. Connect to it with an app and jam out to some top forty.',
        featured: false
      },
      {
        category: 'furniture',
        url: 'red_typewriter',
        img: '//www.gstatic.com/angular/material-adaptive/shrine/red_typewriter.jpg',
        name: 'Typewriter Keyboard',
        description: 'You thought it was a typewriter didn’t you. Think again. It’s actually a bluetooth keyboard. Typewriter Keyboard by Looks Old But Not is a fun way to look neat and hip in coffee shops and poetry contests.',
        featured: false
      },
      {
        category: 'fashion',
        url: 'shoes',
        img: '//www.gstatic.com/angular/material-adaptive/shrine/shoes.jpg',
        name: 'White Shoes',
        description: 'It’s after labor day, but who cares! White shoes were meant to get dirty, so you may want to pick up a few of these. Laces are included. These things are fast.',
        featured: false
      },
      {
        category: 'fashion',
        url: 'sunglasses',
        img: '//www.gstatic.com/angular/material-adaptive/shrine/sunglasses.jpg',
        name: 'Sunglasses',
        description: 'Be an optimist. Carry Sunglasses with you at all times. All Tints and Shades products come with polarized lenses and super duper UV protection so you can look at the sun for however long you want. Sunglasses make you look cool, wear them.',
        featured: false
      },
      {
        category: 'outdoors',
        url: 'surfboard',
        img: '//www.gstatic.com/angular/material-adaptive/shrine/surfboard.jpg',
        name: 'Surfboard',
        description: 'Who says you can’t walk on water? With Surfboard, by Surfboard Supply, you can fly on water. This beast is fast and handles like a porsche. Hang Ten Bro!',
        featured: false
      },
      {
        category: 'food',
        url: 'teapot',
        img: '//www.gstatic.com/angular/material-adaptive/shrine/teapot.jpg',
        name: 'Teapot',
        description: 'Impress your guests with Teapot by Kitchen Stuff. Teapot holds extremely hot liquids and pours them from the spout. Use the handle, shown on the left, so your fingers don’t get burnt while pouring.',
        featured: false
      },
      {
        category: 'outdoors',
        url: 'tent',
        img: '//www.gstatic.com/angular/material-adaptive/shrine/tent.jpg',
        name: 'Two Person Dome Tent',
        description: 'Sleep outside with Two Person Dome Tent. Have a night under the stars. Go on a road trip. Bring friends. Visit wild animals in their natural habitat. Keep pesky insects out. Pick a spot, pop it up, and crash out. ',
        featured: false
      },
      {
        category: 'fashion',
        url: 'umbrella',
        img: '//www.gstatic.com/angular/material-adaptive/shrine/umbrella.jpg',
        name: 'XL Umbrella',
        description: 'It’s obvious what this XL Umbrella is for. Rain. Take a look at your favorite weather app, and bring XL Umbrella with you when it calls for rain. It’s probably big enough to fit three people under there, so be clutch and carry an umbrella big enough to keep your friends dry too. Heck, make one of them hold it.',
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
