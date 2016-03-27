import BaseAdaptiveController from './../utils/BaseAdaptiveController';

class ProductGridController extends  BaseAdaptiveController {
  /**
   * @constructor
   * @param {!angular.Scope} $scope
   * @param {!Object} $shrineItems
   * @param {!Object} $shrineMQObserver
   * @param {!Object} $shrineUtils
   * @param {!angular.Location} $location
   */
  constructor($scope, $shrineMQObserver, $location, $log ) {
    super($scope, $shrineMQObserver,  $log.getInstance("GridLayoutController"));

    this.$scope = $scope;
    this.$location = $location;
  }

  $onInit() {
    this._$log.debug(`_listenForAdaptiveChanges( )`);
    this.subscribeToAdaptiveChanges((viewPort) => {
      this._$log.debug(`onAdaptiveChange( ${viewPort.viewport} )`);

      // NOTE the gridName is assigned in then markup for the grid-layout element:
      // e.g. <grid-layout grid-name="'homeView'" show-details="true" reshuffle="true"></grid-layout>
      let key = this.gridName; // === $scope.ctrl.gridName
      this.viewPort = viewPort.gridInfo[key];
    });
  }

  $onChanges(changes) {
    this.items = changes.currentValue.items;
  }

  /**
   * Gets viewport rowspan.
   */
  getViewportRowSpan(idx) {
    var pos = idx % this.viewPort.tileInfo.length;
    return this.viewPort.tileInfo[pos].rowspan;
  }

  /**
   * Gets viewport colspan.
   */
  getViewportColSpan(idx) {
    var pos = idx % this.viewPort.tileInfo.length;
    return this.viewPort.tileInfo[pos].colspan;
  }

  /**
   * Redirects to the details page by id of item.
   * @param {!event} ev Click event.
   * @param {!String} idItem
   */
  goToDetails(ev, item) {

    this._$log.debug(`goToDetails( '/item/${item.id}' )`);

    ev.stopPropagation();
    this.$location.path('/item/'+ item.id);
  }
}

export default {
  name : 'productGrid',
  config : {
    bindings : {  gridName : '@', items: '<', showDetails : '@'},
    controller : ['$scope', '$shrineMQObserver', '$location', '$log', ProductGridController ],
    templateUrl : 'src/products/tmpl/productGrid.html'
  }
};
