## Architecture and Coding

In general, follow the **[AngularJS Style Guide](https://github.com/johnpapa/angular-styleguide)**

*  Comment your class and critical functions
*  Make sure your application works as expected with AngularJS 1.4.7

### Coding Guidelines

* Package by features (@see [Folders-by-Feature](https://github.com/johnpapa/angular-styleguide#application-structure) and [LIFT](https://github.com/johnpapa/angular-styleguide#application-structure-lift-principle) style )
  * Use `feature` module for easy understanding and grouping
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

Recent Layout changes in v1.0.0-rc2 may break gridList cards... please check and update.

* If a card item is clickable, then ripple or show border at mousedown or hover.
* start using ngAnimate with its new features to transition from grid to card details view
* listen for Escape and Arrow keys to return from cardDetails to gridView

