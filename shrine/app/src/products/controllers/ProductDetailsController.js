import BaseAdaptiveController from './../../utils/BaseAdaptiveController'

// Controller for the item card.
class ProductDetailsController extends  BaseAdaptiveController {
  /**
   * @constructor
   * @param {!angular.Scope} $scope
   * @param {!Object} shrineMQObserver
   * @param {!Object} $shrineItems
   */
  constructor($scope, shrineMQObserver, $log) {
    super($scope, shrineMQObserver, $log.getInstance("ProductDetailsController"));
    this._$log.debug(`_listenForAdaptiveChanges( )`);
    this.subscribeToAdaptiveChanges((viewPort) => {
      this._$log.debug(`onAdaptiveChange( ${viewPort.viewport} )`);
    });
  }

}

ProductDetailsController.$inject = ["$scope", "shrineMQObserver", '$log' ];
export default ProductDetailsController;
