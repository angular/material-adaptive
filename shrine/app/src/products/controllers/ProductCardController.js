import BaseAdaptiveController from './../../utils/BaseAdaptiveController'

// Controller for the item card.
class ProductCardController extends  BaseAdaptiveController {
  /**
   * @constructor
   * @param {!angular.Scope} $scope
   * @param {!Object} $shrineMQObserver
   * @param {!Object} $shrineItems
   */
  constructor($scope, $shrineMQObserver, $log) {
    super($scope, $shrineMQObserver, $log.getInstance("ProductCardController"));

    //this._$log.debug(`_listenForAdaptiveChanges( )`);
    this.subscribeToAdaptiveChanges((viewPort) => {
      //this._$log.debug(`onAdaptiveChange( ${viewPort.viewport} )`);

      this.footerHeight = viewPort.footerHeight;
    });
  }

  /**
   * Adds the item to the cart.
   * @param {!event} ev Click event.
   * @param {!Object} item
   */
  addItemToCart(ev, item) {
    this._$log.debug(`addItemToCart( ${item.title} )`);

    ev.stopPropagation();
    item.addedToCard = !item.addedToCard;
  }

  /**
   * Adds the item to the favorites.
   * @param {!event} ev Click event.
   * @param {!Object} item
   */
  addItemToFavs(ev, item) {
    this._$log.debug(`addItemToFavs( ${item.title} )`);

    ev.stopPropagation();
    item.addedToFavs = !item.addedToFavs;
  }
}

export default ProductCardController;
