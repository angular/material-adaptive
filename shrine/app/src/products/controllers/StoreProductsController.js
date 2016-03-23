import BaseAdaptiveController from './../../utils/BaseAdaptiveController'

class StoreProductsController extends  BaseAdaptiveController {
  /**
   * @constructor
   * @param {!angular.Scope} $scope
   * @param {!angular.RouteParams} $routeParams
   * @param {!angular.Location} $location
   * @param {!angular.Log} $log
   * @param {!Object} $shrineItems
   * @param {!Object} $shrineMQObserver
   */
  constructor($scope, $shrineMQObserver, $shrineCatalog, $routeParams, $location, $log ) {
    super($scope, $shrineMQObserver, $log.getInstance("StoreProductsController"));

    this._$location = $location;
    this._catalog = $shrineCatalog;

    this._loadStoreProductss(  $routeParams.id );
    this._listenForAdaptiveChanges();
  }

  /**
   *
   */
  _loadStoreProductss(itemID) {
    this._loadItemStoreProductss( itemID || 0 )
      .then( item => {
        let category = item.categories[0];
        this._catalog
            .loadByCategory(category)
            .then(items => {
              this.items = items;
            });
        this.selectedItem = item;
      })
  }

  /**
   * Redirects to the homepage.
   * @param {!event} ev Click event.
   * @param {!String} idItem
   */
  goToHomepage(ev) {
    let url = this.selectedItem.categories[0];
    this._$log.debug(`goToCategory( '/${url}' )`);

    ev.stopPropagation();
    this._$location.path(`/${url}`);
  }


  /**
   * Listen for Adaptive changes and update the view
   */
   _listenForAdaptiveChanges() {
    this._$log.debug(`_listenForAdaptiveChanges( )`);

    this.subscribeToAdaptiveChanges((viewPort) => {
      this._$log.debug(`onAdaptiveChange( ${viewPort.viewport} )`);

      this.viewPort = viewPort.gridInfo["StoreProductsView"];
      this.isMobile = (viewPort.minWidth < 840 || viewPort.display == 'mobile');
    });

   }

  /**
   * Using the ID specified in the routeParam (or default to ID == 0)
   * load the item from the `database`
   */
  _loadItemStoreProductss(itemID) {
    this._$log.debug(`_loadItemByID( ${itemID} )`);
    return this._catalog.findItemByID(itemID);
  }

}
StoreProductsController.$inject = [ '$scope', '$shrineMQObserver', '$shrineCatalog', '$routeParams', '$location', '$log' ];

export default StoreProductsController;
