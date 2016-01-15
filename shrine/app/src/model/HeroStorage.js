/**
 * In-memory implementation of hero store.
 */

import Hero from 'model/Hero';

let STORE = [
  Hero.fromJson({
    title: 'Green comfort chair',
    quote: 'Leave the tunnel and the rain is fallin amazing things happen when you wait',
    imageUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/chair.png',
    storeName: 'Trevor’s shop',
    storeAvatarUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/zach.jpg',
    price: '$300',
    category: 'Feature'
  }),
  Hero.fromJson({
    title: 'Beautiful little teapot',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    imageUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/teapot.png',
    storeName: 'Trevor’s shop',
    storeAvatarUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/zach.jpg',
    price: '$300',
    category: 'Latest'
  }),
  Hero.fromJson({
    title: 'Original Sunnies For U',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    imageUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/sunnies.png',
    storeName: 'Trevor’s shop',
    storeAvatarUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/zach.jpg',
    price: '$300',
    category: 'Fashion'
  }),
  Hero.fromJson({
    title: 'Folding Chair',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    imageUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/lawn_chair.png',
    storeName: 'Trevor’s shop',
    storeAvatarUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/zach.jpg',
    price: '$300',
    category: 'Furniture'
  }),
  Hero.fromJson({
    title: 'Better wearing heels',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    imageUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/heels.png',
    storeName: 'Trevor’s shop',
    storeAvatarUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/zach.jpg',
    price: '$300',
    category: 'Beauty'
  }),
  Hero.fromJson({
    title: 'Red Popsicle',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    imageUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/popsicle.png',
    storeName: 'Trevor’s shop',
    storeAvatarUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/zach.jpg',
    price: '$300',
    category: 'Food'
  }),
  Hero.fromJson({
    title: 'Best gift for the traveler',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    imageUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/tent.png',
    storeName: 'Trevor’s shop',
    storeAvatarUrl: 'https://www.gstatic.com/angular/material-adaptive/shrine/zach.jpg',
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
