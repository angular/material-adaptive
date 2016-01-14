/**
 * In-memory implementation of item store.
 */

import Item from 'model/Item';

let STORE = [
  Item.fromJson({
    title: 'Vintage Bluetooth Radio',
    description: 'Isn’t it cool when things look old, but their not. Looks Old But Not makes awesome vintage goods that are super smart. This ol’ radio just got an upgrade. Connect to it with an app and jam out to some top forty.',
    imageUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/radio.png',
    price: '$300',
    storeName: 'Looks Old But Not',
    storeAvatarUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/zach.jpg',
    featured: false
  }),
  Item.fromJson({
    title: 'Sunglasses',
    description: 'Be an optimist. Carry Sunglasses with you at all times. All Tints and Shades products come with polarized lenses and super duper UV protection so you can look at the sun for however long you want. Sunglasses make you look cool, wear them.',
    imageUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/sunnies.png',
    price: '$70',
    storeName: 'Tints and Shades',
    storeAvatarUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/zach.jpg',
    featured: false
  }),
  Item.fromJson({
    title: 'Clock',
    description: 'Timekeeper Co makes clocks that tell time precisely. Clock is very simple to use, set the time using your phone, hang it, and viola! You’ll never be late again.',
    imageUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/clock.png',
    price: '$120',
    storeName: 'Timekeeper Co',
    storeAvatarUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/zach.jpg',
    featured: false
  }),
  Item.fromJson({
    title: 'Red Popsicle',
    description: 'Looks can be deceiving. This Red Popsicle comes in a wide variety of flavors, including strawberry, that burst as soon as it hits the mouth. Red Popsicles melt slow, so savor the flavor.',
    imageUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/popsicle.png',
    price: '$300',
    storeName: 'Popsicle Pride',
    storeAvatarUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/zach.jpg',
    featured: false
  }),
  Item.fromJson({
    title: 'Green Slip-ons',
    description: 'Feetsy has been making extraordinary slip-ons for decades. With each pair of shoes purchased Feetsy donates a pair to those in need. Buy yourself a pair, buy someone else a pair. Very Comfortable.',
    imageUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/shoes.png',
    price: '$75',
    storeName: 'Feetsy',
    storeAvatarUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/zach.jpg',
    featured: false
  }),
  Item.fromJson({
    title: 'Teapot',
    description: 'Impress your guests with Teapot by Kitchen Stuff. Teapot holds extremely hot liquids and pours them from the spout. Use the handle, shown on the left, so your fingers don’t get burnt while pouring.',
    imageUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/teapot.png',
    price: '$210',
    storeName: 'Kitchen Stuff',
    storeAvatarUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/zach.jpg',
    featured: false
  }),
  Item.fromJson({
    title: 'Blue suede shoes',
    description: 'Who needs pants when you have shoes! Blue suede shoes were meant to go dancing in, so you may want to pick up a few of these. These things are stylish.',
    imageUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/heels.png',
    price: '$89',
    storeName: 'Footnotes',
    storeAvatarUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/zach.jpg',
    featured: true
  }),
  Item.fromJson({
    title: 'Dipped Brush',
    description: 'WeDipIt does it again. This handle dipped 4 inch brush is a perfect for painting 4 inch lines, or coloring in big areas with paint. Just be sure you don’t drop it in a bucket of red paint, then it won’t look dipped anymore.',
    imageUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/brush.png',
    price: '$25',
    storeName: 'WeDipIt',
    storeAvatarUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/zach.jpg',
    featured: true
  })];

class ItemStorage {

  constructor($q) {
    this.q_ = $q;
  }

  getAllItems() {
    return this.q_.when(STORE);
  }

  getItem(id) {
    return this.q_.when(STORE[id]);
  }
}

ItemStorage.$inject = ['$q'];

export default ItemStorage;
