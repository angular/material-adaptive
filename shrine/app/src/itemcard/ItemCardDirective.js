// Controller for the item card.
class ItemCardController {

  constructor($scope, ShrineDomUtils, ItemStorage) {
    this.$scope = $scope;
    this.viewport = ShrineDomUtils.getViewport();
    this.viewport.current.updated = () => {
      this.$scope.$apply();
    }
  }

  getViewportFooterHeight() {
    return this.viewport.current.footerHeight;
  }

  addItemToCart(ev, item) {
    ev.stopPropagation();
    item.addedToCard = !item.addedToCard;
  }

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
      templateUrl      : 'src/itemcard/view/itemcard.html'
    });
  }
}

ItemCardDirective.$inject = ['$scope', 'ShrineDomUtils', 'ItemStorage'];
export default ItemCardDirective;
