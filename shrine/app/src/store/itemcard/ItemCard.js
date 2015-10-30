// Controller for the item card used in item lists.
class ItemCardController {

  constructor($state, $location) {
    this.$state = $state;
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
          replace          : false,
          scope            : {  item: '=' },
          bindToController : true,
          controllerAs     : 'itemcard',
          controller       : ItemCardController,
          templateUrl      : 'src/store/itemcard/itemcard.html'
        });
    }  
}

ItemCardDirective.$inject = ['$state', '$location'];
export default ItemCardDirective;
