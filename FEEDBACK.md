## Overview

As we prepare to release these applications for public consumption within the Angular Material community, our goal is

* validate ease-of-use to create applications with Angular Material
* validate implementations of adaptive layouts with Angular Material
* provide both applications and code as sample for developer starter project
* demonstrate code styles and best practices

To that effect, this document contains some feedback regarding recommended changes to conform to the above criteria.

## Architecture and Coding

In general, follow the **[AngularJS Style Guide](https://github.com/johnpapa/angular-styleguide)**

*  Comment your class and critical functions
*  Make sure your application works as expected with AngularJS 1.4.7

### Coding Guidelines

* Package by features
  * Use `feature` module for easy understanding and grouping
  * see style guide for [Folders-by-Feature](https://github.com/johnpapa/angular-styleguide#application-structure) and [LIFT](https://github.com/johnpapa/angular-styleguide#application-structure-lift-principle)
* Create an App Module
  * https://github.com/johnpapa/angular-styleguide#style-y163
* Refactor routing to feature `<feature_name>/Routes.js` and `app/Routes.js`
  * Use [RouterHelper](https://github.com/johnpapa/angular-styleguide#routing)
* Refactor theming to `app/Themes.js` 
  * Build a ThemeHelper similar to **RouterHelper**
* Modules
  * each feature should have its own Angular module (registrations and configs)
  * each ng module exports its name
  ```js
      import CatalogController from 'src/catalog/CatalogController';
      
      export angular
        .module('catalog', [])
        .controller('CatalogController' , CatalogController )
        .name;
  ```
  * each es6 module exports its annotated class
  ```js
      class ItemCardDirective {
          constructor() {
              angular.extend(this, {
                restrict         : 'E',
                replace          : false,
                scope            : {  item: '=' },
                bindToController : true,
                controllerAs     : 'itemcard',
                controller       : ItemCardController,
                templateUrl      : 'src/store/itemcard/itemcard.html'
              });
          }  
      }
      
      // export annotated Class
      export default ['$state', '$location', ItemCardDirective];    
  ```
  
### UX

Recent Layout changes in **[v1.0.0-rc2](https://github.com/angular/material/commits/v1.0.0-rc2)** may break gridList cards. 

For example, here is the latest view from Shrine:

![shrine_blank](https://cloud.githubusercontent.com/assets/210413/10845088/09704c10-7ed3-11e5-9cea-1a94b1ca365d.png)

Other generalized recommendations:

* Start using **ngAnimate** with its new features to transition from grid to card details view
* If a card item is clickable, then ripple or show border at mousedown or hover.
* Listen for Escape key [and Arrow keys] for some navigations. e.g. to return from cardDetails to gridView

