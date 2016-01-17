/**
 * In-memory implementation of hero store.
 */

import Hero from 'model/Hero';

let STORE = [
  Hero.fromJson({
    title: 'Green comfort chair',
    quote: 'Leave the tunnel and the rain is fallin amazing things happen when you wait',
    imageUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/chair.png',
    storeName: 'Ali’s shop',
    storeAvatarUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/ali-connors.png',
    price: '$300',
    category: 'Feature'
  }),
  Hero.fromJson({
    title: 'Beautiful little teapot',
    quote: 'Leave the tunnel and the rain is fallin amazing things happen when you wait',
    imageUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/beachball.png',
    storeName: 'Trevor’s shop',
    storeAvatarUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/zach.jpg',
    price: '$300',
    category: 'Latest'
  }),
  Hero.fromJson({
    title: 'Original Sunnies For U',
    quote: 'Leave the tunnel and the rain is fallin amazing things happen when you wait',
    imageUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/chucks.png',
    storeName: 'Sandra’s shop',
    storeAvatarUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/sandra-adams.jpg',
    price: '$300',
    category: 'Fashion'
  }),
  Hero.fromJson({
    title: 'Folding Chair',
    quote: 'Leave the tunnel and the rain is fallin amazing things happen when you wait',
    imageUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/lawn_chair.png',
    storeName: 'Stella’s shop',
    storeAvatarUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/16c477b.jpg',
    price: '$300',
    category: 'Furniture'
  }),
  Hero.fromJson({
    title: 'Better wearing heels',
    quote: 'Leave the tunnel and the rain is fallin amazing things happen when you wait',
    imageUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/heels.png',
    storeName: 'Peter’s shop',
    storeAvatarUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/peter-carlsson.png',
    price: '$300',
    category: 'Beauty'
  }),
  Hero.fromJson({
    title: 'Red Popsicle',
    quote: 'Leave the tunnel and the rain is fallin amazing things happen when you wait',
    imageUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/popsicle.png',
    storeName: 'Trevor’s shop',
    storeAvatarUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/zach.jpg',
    price: '$300',
    category: 'Food'
  }),
  Hero.fromJson({
    title: 'Best gift for the traveler',
    quote: 'Leave the tunnel and the rain is fallin amazing things happen when you wait',
    imageUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/backpack.png',
    storeName: 'Sandra’s shop',
    storeAvatarUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/sandra-adams.jpg',
    price: '$300',
    category: 'Travel'
  })];

class HeroStorage {

  constructor($q) {
    this.q_ = $q;
  }

  getAllHeros() {
    return this.q_.when(STORE);
  }

  getHero(id) {
    return this.q_.when(STORE[id]);
  }
}

HeroStorage.$inject = ['$q'];

export default HeroStorage;
