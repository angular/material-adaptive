// Controller for the item card.
class ItemCardController {
  /**
   * @constructor
   * @param {!angular.Scope} $scope
   * @param {!Object} ShrineDomUtils
   * @param {!Object} ItemStorage
   */
  constructor($scope, ShrineDomUtils, ItemStorage) {
    this.$scope = $scope;
    this.viewport = ShrineDomUtils.getViewport();
    this.viewport.current.updated = () => {
      this.$scope.$apply();
    }
  }

  /**
   * Gets the current viewport footer height.
   * @return {Object}
   */
  getViewportFooterHeight() {
    return this.viewport.current.footerHeight;
  }

  /**
   * Adds the item to the cart.
   * @param {!event} ev Click event.
   * @param {!Object} item
   */
  addItemToCart(ev, item) {
    ev.stopPropagation();
    item.addedToCard = !item.addedToCard;
  }

  /**
   * Adds the item to the favorites.
   * @param {!event} ev Click event.
   * @param {!Object} item
   */
  addItemToFavs(ev, item) {
    ev.stopPropagation();
    item.addedToFavs = !item.addedToFavs;
  }
}

// Directive definition of the the ItemCard.
class ItemCardDirective {
  constructor() {
    angular.extend(this, {
      restrict         : 'E',
      scope            : {  item: '=', showDetails: '=' },
      bindToController : true,
      controllerAs     : 'ctrl',
      controller       : ItemCardController,
      controller       : ["$scope", "ShrineDomUtils", "ItemStorage", ItemCardController],

      templateUrl      : 'src/itemcard/view/itemcard.html'
    });
  }
}

ItemCardDirective.$inject = ['$scope', 'ShrineDomUtils', 'ItemStorage'];
export default ItemCardDirective;
