import BaseAdaptiveController from './../utils/BaseAdaptiveController'

/**
 * Controller for the home page.
 */
class DashboardController extends  BaseAdaptiveController {
  /**
   * @constructor
   * @param {!angular.Scope} $scope
   * @param {!Object} $shrineMQObserver
   * @param {!Object} $shrineHeroes
   * @param {!md.$sidenav} $mdSidenav
   * @param {!angular.Location} $location
   * @param {!angular.routeParams} $routeParams
   * @param {!angular.Log} $log
   */
  constructor($scope, $shrineMQObserver, $shrineCatalog, $mdSidenav, $location, $routeParams, $log ) {
    super($scope, $shrineMQObserver, $log.getInstance("DashboardController"));

    this._$routeParams = $routeParams;
    this._$body = document.body;
    this._sideNav = $mdSidenav;
    this._catalog = $shrineCatalog;

    this.selectedCategory = 'feature';

    this.$scope = $scope;
    this.$location = $location;

  }

  $onInit() {
    this._gatherCategories( this._$routeParams['category'] || 'feature' );
    this._watchAdaptiveChanges();
  }

  // ******************************
  // Public Methods
  // ******************************

  /**
   * Opens sidenav
   */
  openSidenav() {
    this._$log.debug(`openSidenav( )`);
    this._sideNav('primary').open();
  }

  /**
   * Hides sidenav
   */
  hideSidenav() {
    this._$log.debug(`hideSidenav( )`);
    this._sideNav('primary').close();
  }

  

  /**
   * Redirects to the category tab.
   * @param {!event} ev Click event.
   * @param {!String} categoryName
   */
  goToCategory(categoryName) {
    categoryName = (categoryName || "").toLowerCase();
    this._$log.debug(`goToCategory( ${categoryName} )`);

    this.hideSidenav();
    this.$location.path(`/${categoryName}`);
  }

  // ******************************
  // Private Methods
  // ******************************

  /**
    * Build model for the Navigation bar (mdTabs)
    */
   _gatherCategories( selectedCategory ) {
     this._catalog
         .loadByCategory('feature')
         .then(items => {
           this.categories = items;

           this._findCategoryIndex(selectedCategory);
           this._watchCategorySelection();
         });
   }

   _findCategoryIndex(category) {
      category = String(category).toLowerCase();

      this.selectedIndex = 0;

      angular.forEach( this.categories,(it, index) => {
        if (it.category.toLowerCase() == category) {
          this.selectedIndex = index;
          this.selectedCategory = category;
        }
      });
   }

   /**
    * Whenever the navBar selected index changes (e.g. navbar selection), then
    * lookup the category
    */
   _watchCategorySelection() {
     let self = this;
     this.$scope.$watch( ()=>this.selectedIndex, (index)=>{
       let category =  angular.isDefined(index) ? this.categories[index].category : 'feature';

       this._catalog
           .loadByCategory(category)
           .then(items => {
             self.items = items;
             self.selectedCategory = category;
           });
     });
   }

   /**
    *
    */
   _watchAdaptiveChanges() {
     this._$log.debug(`_listenForAdaptiveChanges( )`);
     this.subscribeToAdaptiveChanges((viewPort) => {
       this._$log.debug(`onAdaptiveChange( ${viewPort.viewport} )`);

       this.viewPort = viewPort.gridInfo["detailView"];
       this.isMobile = (viewPort.minWidth < 840 || viewPort.display == 'mobile');
     });
   }
}

export default {
  name : 'dashboard',
  config : {
    controllerAs: 'home',
    controller: [ '$scope', '$shrineMQObserver', '$shrineCatalog', '$mdSidenav', '$location','$routeParams', '$log', DashboardController ],
    templateUrl : 'src/dashboard/tmpl/dashboard.html'
  }
};
