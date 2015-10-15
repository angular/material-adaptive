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
    var stateOptions = {
      category: this.item.category,
      detail: this.item.url
    }
    this.$state.transitionTo('root.category.detail', stateOptions);
  }
}

// Directive definition of the the ItemCard.
class ItemCardDirective {
    constructor() {
        this.bindToController = true;
        this.controller = ItemCardController;
        this.controllerAs = 'itemcard'
        this.replace = true;
        this.restrict = 'E'; 
        this.scope = {
          item: '='
        }
        this.templateUrl = 'src/store/itemcard/itemcard.html'; 
    }  
}

ItemCardDirective.$inject = ['$state', '$location'];
export default ItemCardDirective;
