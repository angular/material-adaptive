/**
 * In-memory implementation of hero store.
 */

import Hero from 'model/Hero';

const STORE = [
  Hero.fromJson({
    id:48,
    title: 'Green comfort chair',
    quote: 'Leave the tunnel and the rain is fallin amazing things happen when you wait',
    imageUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/chair.png',
    storeName: 'Ali’s shop',
    storeAvatarUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/ali-connors.png',
    price: '$36',
    category: 'Feature'
  }),
  Hero.fromJson({
    id: 12,
    title: 'BeachBall of Glee',
    quote: 'Are you at a baseball game and feeling bored? At a pool party and looking for a laugh? Do you need something to take your anger out on? Beachball, by inflatable fun, is the perfect outlet.',
    imageUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/beachball.png',
    storeName: 'Trevor’s shop',
    storeAvatarUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/zach.jpg',
    price: '$17',
    category: 'Latest'
  }),
  Hero.fromJson({
    id: 6,
    title: 'Blue suede shoes',
    quote: 'Who needs pants when you have shoes! Blue suede shoes were meant to go dancing in, so you may want to pick up a few of these. These things are stylish.',
    imageUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/chucks.png',
    storeName: 'Sandra’s shop',
    storeAvatarUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/sandra-adams.jpg',
    price: '$89',
    category: 'Fashion'
  }),
  Hero.fromJson({
    id: 47,
    title: 'Folding Chair',
    quote: 'Leave the tunnel and the rain is fallin amazing things happen when you wait',
    imageUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/lawn_chair.png',
    storeName: 'Stella’s shop',
    storeAvatarUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/16c477b.jpg',
    price: '$63',
    category: 'Furniture'
  }),
  Hero.fromJson({
    id: 51,
    title: 'Better wearing heels',
    quote: 'Leave the tunnel and the rain is fallin amazing things happen when you wait',
    imageUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/heels.png',
    storeName: 'Peter’s shop',
    storeAvatarUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/peter-carlsson.png',
    price: '$125',
    category: 'Beauty'
  }),
  Hero.fromJson({
    id:3,
    title: 'Red Popsicle',
    quote: 'Leave the tunnel and the rain is fallin amazing things happen when you wait',
    imageUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/popsicle.png',
    storeName: 'Trevor’s shop',
    storeAvatarUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/zach.jpg',
    price: '$300',
    category: 'Food'
  }),
  Hero.fromJson({
    id:10,
    title: 'Best gift for the traveler',
    quote: 'This backpack by Bags ‘n’ stuff can hold just about anything: a laptop, a pen, a protractor, notebooks, small animals, plugs for your devices, sunglasses, gym clothes, shoes, gloves, two kittens, and even lunch!',
    imageUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/backpack.png',
    storeName: 'Peter’s shop',
    storeAvatarUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/sandra-adams.jpg',
    price: '$25',
    category: 'Travel'
  })];

export default STORE;
