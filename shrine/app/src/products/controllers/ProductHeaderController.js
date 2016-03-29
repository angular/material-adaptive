import BaseAdaptiveController from './../../utils/BaseAdaptiveController'

const URL_MOBILE_SHRINE = 'https://www.gstatic.com/angular/material-adaptive/shrine/shrine_logo.svg';
const URL_SHRINE = 'https://www.gstatic.com/angular/material-adaptive/shrine/shrine_logo.svg';

// Controller for the item card.
class ProductHeaderController extends  BaseAdaptiveController {
  /**
   * @constructor
   * @param {!angular.Scope} $scope
   * @param {!Object} shrineMQObserver
   * @param {!Object} $shrineItems
   */
  constructor($scope, shrineMQObserver, $location, $log) {
    super($scope, shrineMQObserver, $log.getInstance("ProductHeaderController"));
    this._$location = $location;

    this._$log.debug(`_listenForAdaptiveChanges( )`);
    this.subscribeToAdaptiveChanges((viewPort) => {
      this._$log.debug(`onAdaptiveChange( ${viewPort.viewport} )`);
      this.logoURL = this.isMobile ? URL_MOBILE_SHRINE : URL_SHRINE;
    });
  }

  /**
   * Redirects to the homepage.
   * @param {!event} ev Click event.
   * @param {!String} idItem
   */
  goToHomepage(event) {
    let url = this.item.categories[0];
    this._$log.debug(`goToCategory( '/${url}' )`);

    event.stopPropagation();
    this._$location.path(`/${url}`);
  }
}

ProductHeaderController.$inject = ["$scope", "shrineMQObserver", '$location', '$log' ];
export default ProductHeaderController;
