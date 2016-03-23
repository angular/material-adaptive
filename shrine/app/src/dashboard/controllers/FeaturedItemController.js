import BaseAdaptiveController from './../../utils/BaseAdaptiveController'

// Controller for the item card.
class FeaturedItemController extends  BaseAdaptiveController {
  /**
   * @constructor
   * @param {!angular.Scope} $scope
   * @param {!Object} $shrineMQObserver
   * @param {!Object} $shrineItems
   */
  constructor($scope, $shrineMQObserver, $log) {
    super($scope, $shrineMQObserver, $log.getInstance("FeaturedItemController"));

    this._$log.debug(`_listenForAdaptiveChanges( )`);
    this.subscribeToAdaptiveChanges((viewPort) => {
      // Do nothing for now...
    });
  }
}

FeaturedItemController.$inject = [ '$scope', '$shrineMQObserver', '$log' ];
export default FeaturedItemController;

