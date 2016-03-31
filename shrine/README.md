### SHRINE (with Components API)

This implementation of Shrine uses ES6, JSPM, Angular Material, and demonstrates Angular Best Practices. 

> These best practices are also discussed in John Papa's [Angular 1 Style Guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md) and Pluralsight Course: [Clean Code](http://jpapa.me/ngclean)

[![Angular Patterns: Clean Code](https://raw.githubusercontent.com/johnpapa/angular-styleguide/master/a1/assets/ng-clean-code-banner.png)](http://jpapa.me/ngclean)

The Shrine application has coding styles, packaging, and architecture patterns implemented as guides for developers implementing their own Angular 1.x SPA(s). This application also serves to demonstrate Adaptive user experiences achieved using specialized [view configurations](https://github.com/angular/material-adaptive/blob/components/shrine/app/src/configuration/ViewConfigurations.js) and a [mediaQuery Observer](https://github.com/angular/material-adaptive/blob/components/shrine/app/src/utils/MediaQueryObserver.js) pattern.

<br/>

#### Using Angular 1.5.x Component API

This implementation of Shrine also uses Angular 1.5.x and the new [`.component( )` API](https://docs.angularjs.org/guide/component). Building Shrine with *components* dramatically simplified the project/code structures and allows developers to easily understand how the UI designs are implemented as Angular Components. 

> Implementing your Angular 1.5.x application with Components also means your migration to Angular 2 will be significantly easier... 

<br/>

---

### Illustrating UX-to-Components

Below are some illustrations that map portions of those Shrine UI views to actual Angular components. Shrine has two (2) primary views:

#### Dashboard

![dashboard](https://cloud.githubusercontent.com/assets/210413/14126204/006e906c-f5d5-11e5-8b42-004f5e142406.png)

> HTML markup for the <a href="https://github.com/angular/material-adaptive/blob/components/shrine/app/src/dashboard/tmpl/dashboard.html#L20"  target="_blank">Dashboard</a> page:

```html
<dashboard>
  <nav-bar isMobile="$ctrl.isMobile" on-open-sidenav="$ctrl.openSidenav()"></nav-bar>
  <md-tabs >
    <md-tab ng-repeat="it in $ctrl.categories" >
      <featured-item item="it"></featured-item>
    </md-tab>
  </md-tabs>
  <product-grid grid-name="homeView" show-details="true" items="$ctrl.items" ></product-grid>
  <md-sidenav >
    <side-bar categories="$ctrl.categories" selected="$ctrl.category"></side-bar>
  </md-sidenav>
</dashboard>
```

> Definition of the [Dashboard](https://github.com/angular/material-adaptive/blob/components/shrine/app/src/dashboard/_module.js) module:

```js
/**
 * Configure the shrine 'Dashboard' module
 * Register the dashboard component and its child components
 */

import Dashboard      from './Dashboard';
import NavBar         from './NavBar';
import SideBar        from './SideBar';
import FeaturedItem   from './FeaturedItem';

export default angular.module('shrine.dashboard', [ ] )
    .component( Dashboard.name    , Dashboard.config )
    .component( FeaturedItem.name , FeaturedItem.config )
    .component( NavBar.name       , NavBar.config )
    .component( SideBar.name      , SideBar.config );
```

<br/>

#### Product Viewer

![productviewer](https://cloud.githubusercontent.com/assets/210413/14126209/0208e850-f5d5-11e5-9813-1c880514df0e.png)

> HTML markup for the <a href="https://github.com/angular/material-adaptive/blob/components/shrine/app/src/products/tmpl/productViewer.html#L3" target="_blank">ProductViewer</a> page:

```html
<product-viewer>
  <product-header is-mobile="viewer.isMobile" item="viewer.selectedItem" ></product-header>
  <div class="details-container">
    <product-details item="viewer.selectedItem" ></product-details>
    <product-grid grid-name="detailView" items="viewer.items" show-details="false" ></product-grid>
  </div>
</product-viewer>
```

> Definition of the [Product](https://github.com/angular/material-adaptive/blob/components/shrine/app/src/products/_module.js) module:


```js
/**
 * Configure the shrine 'Products' module
 */

import ProductViewer  from './ProductViewer';
import ProductGrid    from './ProductGrid';
import ProductHeader  from './ProductHeader';
import ProductCard    from './ProductCard';
import ProductDetails from './ProductDetails';

export default angular.module('shrine.products', [ ] )
    .component( ProductViewer.name   , ProductViewer.config )
    .component( ProductHeader.name   , ProductHeader.config )
    .component( ProductDetails.name  , ProductDetails.config )
    .component( ProductGrid.name     , ProductGrid.config )
    .component( ProductCard.name     , ProductCard.config );
```


<br/>
---

### Adaptive Angular Material

In addition to using the powerful [Angular Material UI Components](https://material.angularjs.org/HEAD/) and [**Layout**](https://material.angularjs.org/latest/layout/introduction) features, Shrine also implements an architecture to support custom view configurations and mediaQueries. These features enable Shrine to both resize the UI components **and** change the UI components positions and configurations... as needed to adapt to different viewport display sizes:

![shrine_adaptiveviews](https://cloud.githubusercontent.com/assets/210413/14126526/1d3ea496-f5d7-11e5-945b-5beacaa59f5a.png)

*  <a href="https://material-adaptive.firebaseapp.com/shrine/app/index.html" target="_blank"> Shrine Live </a>
*  <a href="http://design.google.com/resizer/#url=https%3A%2F%2Fmaterial-adaptive.firebaseapp.com%2Fshrine%2Fapp%2Fdist.html" target="_blank"> Google's Resizer with Shrine Live </a>


<br/>

----

<br/>


### Additional Features

> This branch does **not** use the new Angular 2 Router:  `ngComponentRouter`. Instead, `<ng-view>` and the Angular 1 ngRouter are currently used.


<br/>

---

### Getting started

Clone the repo and run the following commands:

```
npm install jspm -g
npm install
cd ./app; jspm install
```

Start the dev server like so.

```
npm install http-server
http-server app/
```
