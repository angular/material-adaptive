import BaseAdaptiveController from './../utils/BaseAdaptiveController'

class ProductViewerController extends  BaseAdaptiveController {
  /**
   * @constructor
   * @param {!angular.Scope} $scope
   * @param {!angular.RouteParams} $routeParams
   * @param {!angular.Log} $log
   * @param {!Object} $shrineItems
   * @param {!Object} $shrineMQObserver
   */
  constructor($scope, $shrineMQObserver, $shrineCatalog, $routeParams, $log ) {
    super($scope, $shrineMQObserver, $log.getInstance("ProductViewerController"));

    this._$routeParams = $routeParams;
    this._catalog = $shrineCatalog;
  }

  $onInit() {
    this._loadStoreProducts( this._$routeParams.id );
    this._listenForAdaptiveChanges();
  }

  /**
   *
   */
  _loadStoreProducts(productID) {
    this._loadItemStoreProductss( productID || 0 )
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
   * Listen for Adaptive changes and update the view
   */
   _listenForAdaptiveChanges() {
    this._$log.debug(`_listenForAdaptiveChanges( )`);

    this.subscribeToAdaptiveChanges((viewPort) => {
      this._$log.debug(`onAdaptiveChange( ${viewPort.viewport} )`);

      this.viewPort = viewPort.gridInfo["detailView"];
      this.isMobile = (viewPort.minWidth < 840 || viewPort.display == 'mobile');
    });

   }

  /**
   * Using the ID specified in the routeParam (or default to ID == 0)
   * load the item from the `database`
   */
  _loadItemStoreProductss(productID) {
    this._$log.debug(`_loadItemByID( ${productID} )`);
    return this._catalog.findItemByID(productID);
  }

}

export default {
  name : 'productViewer',
  config : {
    controllerAs : 'viewer',
    controller : ['$scope', '$shrineMQObserver', '$shrineCatalog', '$routeParams', '$log', ProductViewerController],
    templateUrl : 'src/products/tmpl/productViewer.html'
  }
};
