// Controller for the item card used in item lists.
class ItemCardController {

  constructor($scope, $state, $location, ShrineDomUtils) {
    this.$state = $state;
    this.ShrineDomUtils = ShrineDomUtils;
    this.currentViewport = this.ShrineDomUtils.currentViewport;

    $scope.$watch(() => { return this.ShrineDomUtils.currentViewport; }, (newValue, oldValue) => {
      if (newValue !== oldValue) {
        this.currentViewport = newValue;
      }
    });
  }

  /**
   * Returns the currently selected state of the item.
   * @return {boolean} The currently selected state of the item.
   */
  isSelected() {
    return (
      this.$state.params.category == this.item.category &&
      this.$state.params.detail == this.item.url
      )
  }

  /**
   * Opens the detail view for the item.
   */
  openDetail() {
    this.$state.transitionTo('root.category.detail', {
      detail  : this.item.url,
      category: this.item.category
    });
  }
}

// Directive definition of the the ItemCard.
class ItemCardDirective {
    constructor() {
        angular.extend(this, {
          restrict         : 'E',
          scope            : {  item: '=' },
          bindToController : true,
          controllerAs     : 'itemcard',
          controller       : ItemCardController,
          templateUrl      : 'src/store/itemcard/itemcard.html'
        });
    }  
}

ItemCardDirective.$inject = ['$scope', '$state', '$location', 'ShrineDomUtils'];
export default ItemCardDirective;
