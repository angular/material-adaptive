/**
 * In-memory implementation of item store.
 */

import Item from 'model/Item';

let STORE = [
  Item.fromJson({
    id: 0,
    title: 'Vintage Bluetooth Radio',
    description: 'Isn’t it cool when things look old, but their not. Looks Old But Not makes awesome vintage goods that are super smart. This ol’ radio just got an upgrade. Connect to it with an app and jam out to some top forty.',
    imageUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/radio.png',
    price: '$300',
    storeName: 'Looks Old But Not',
    storeAvatarUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/zach.jpg',
    featured: false
  }),
  Item.fromJson({
    id: 1,
    title: 'Sunglasses',
    description: 'Be an optimist. Carry Sunglasses with you at all times. All Tints and Shades products come with polarized lenses and super duper UV protection so you can look at the sun for however long you want. Sunglasses make you look cool, wear them.',
    imageUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/sunnies.png',
    price: '$70',
    storeName: 'Tints and Shades',
    storeAvatarUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/zach.jpg',
    featured: false
  }),
  Item.fromJson({
    id: 2,
    title: 'Clock',
    description: 'Timekeeper Co makes clocks that tell time precisely. Clock is very simple to use, set the time using your phone, hang it, and viola! You’ll never be late again.',
    imageUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/clock.png',
    price: '$120',
    storeName: 'Timekeeper Co',
    storeAvatarUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/zach.jpg',
    featured: false
  }),
  Item.fromJson({
    id: 3,
    title: 'Red Popsicle',
    description: 'Looks can be deceiving. This Red Popsicle comes in a wide variety of flavors, including strawberry, that burst as soon as it hits the mouth. Red Popsicles melt slow, so savor the flavor.',
    imageUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/popsicle.png',
    price: '$300',
    storeName: 'Popsicle Pride',
    storeAvatarUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/zach.jpg',
    featured: false
  }),
  Item.fromJson({
    id: 4,
    title: 'Green Slip-ons',
    description: 'Feetsy has been making extraordinary slip-ons for decades. With each pair of shoes purchased Feetsy donates a pair to those in need. Buy yourself a pair, buy someone else a pair. Very Comfortable.',
    imageUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/green-shoes.png',
    price: '$75',
    storeName: 'Feetsy',
    storeAvatarUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/zach.jpg',
    featured: false
  }),
  Item.fromJson({
    id: 5,
    title: 'Teapot',
    description: 'Impress your guests with Teapot by Kitchen Stuff. Teapot holds extremely hot liquids and pours them from the spout. Use the handle, shown on the left, so your fingers don’t get burnt while pouring.',
    imageUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/teapot.png',
    price: '$210',
    storeName: 'Kitchen Stuff',
    storeAvatarUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/zach.jpg',
    featured: false
  }),
  Item.fromJson({
    id: 6,
    title: 'Blue suede shoes',
    description: 'Who needs pants when you have shoes! Blue suede shoes were meant to go dancing in, so you may want to pick up a few of these. These things are stylish.',
    imageUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/heels.png',
    price: '$89',
    storeName: 'Footnotes',
    storeAvatarUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/zach.jpg',
    featured: true
  }),
  Item.fromJson({
    id: 7,
    title: 'Dipped Brush',
    description: 'WeDipIt does it again. This handle dipped 4 inch brush is a perfect for painting 4 inch lines, or coloring in big areas with paint. Just be sure you don’t drop it in a bucket of red paint, then it won’t look dipped anymore.',
    imageUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/brush.png',
    price: '$25',
    storeName: 'WeDipIt',
    storeAvatarUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/zach.jpg',
    featured: true
  }),
  Item.fromJson({
    id: 8,
    title: 'Perfect Goldfish Bowl',
    description: 'The Perfect Bowl Co makes the best bowls for just about anything you can think of. This Perfect Goldfish Bowl holds water and fish perfectly. Looks great in living rooms. Keep out of reach from cats.',
    imageUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/fish_bowl.png',
    price: '$25',
    storeName: 'Perfect Bowl Co',
    storeAvatarUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/zach.jpg',
    featured: false
  }),
  Item.fromJson({
    id: 9,
    title: 'Red Lipstick Set',
    description: 'Trying to find the perfect shade to match your mood? Try no longer. Red Lipstick Set by StickLips has you covered for those nights when you need to get out, or even if you’re just headed to work.',
    imageUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/lipstick.png',
    price: '$25',
    storeName: 'StikLips',
    storeAvatarUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/zach.jpg',
    featured: false
  }),
  Item.fromJson({
    id: 10,
    title: 'Backpack',
    description: 'This backpack by Bags ‘n’ stuff can hold just about anything: a laptop, a pen, a protractor, notebooks, small animals, plugs for your devices, sunglasses, gym clothes, shoes, gloves, two kittens, and even lunch!',
    imageUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/backpack.png',
    price: '$25',
    storeName: 'Bags ‘n’ Stuff',
    storeAvatarUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/zach.jpg',
    featured: false
  }),
  Item.fromJson({
    id: 11,
    title: 'Half Shield Helmet',
    description: 'Half Shield is the right helmet for those warm summer days on the road. Dot approved, these helmets have been rigorously tested. Keep that noggin protected.',
    imageUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/helmet.png',
    price: '$25',
    storeName: 'Helmet Factory',
    storeAvatarUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/zach.jpg',
    featured: false
  }),
  Item.fromJson({
    id: 12,
    title: 'Beachball',
    description: 'Are you at a baseball game and feeling bored? At a pool party and looking for a laugh? Do you need something to take your anger out on? Beachball, by inflatable fun, is the perfect outlet.',
    imageUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/beach_ball.png',
    price: '$25',
    storeName: 'Inflatable fun',
    storeAvatarUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/zach.jpg',
    featured: false
  }),
  Item.fromJson({
    id: 13,
    title: 'Old Binoculars',
    description: 'These Binoculars by See Through are amazing and can make things that are really far away seem like they’re right in front of you. Bring them to the beach. Now you can buy the cheap seats at the big game and feel like you’re right in the action.',
    imageUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/binoculars.png',
    price: '$25',
    storeName: 'See Through',
    storeAvatarUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/zach.jpg',
    featured: false
  }),
  Item.fromJson({
    id: 14,
    title: 'Lime Flippers',
    description: 'Flippers are a nice tool to have when you’re being chased by an oversized sea turtle. Never get caught again with these fast water shoes. You’re like a fish, but more graceful.',
    imageUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/flippers.png',
    price: '$25',
    storeName: 'Swimfast',
    storeAvatarUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/zach.jpg',
    featured: true
  }),
  Item.fromJson({
    id: 15,
    title: 'Surfboard',
    description: 'Who says you can’t walk on water? With Surfboard, by Surfboard Supply, you can fly on water. This beast is fast and handles like a porsche. Hang Ten Bro!',
    imageUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/surfboard.png',
    price: '$25',
    storeName: 'Surfboard Supply',
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
