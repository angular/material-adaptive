class ItemCardController {

  constructor($state, $location) {
    this.$state = $state;
  }

  isSelected() {
    return (
      this.$state.params.category == this.item.category &&
      this.$state.params.detail == this.item.url
      )
  }

  openDetail() {
    var stateOptions = {
      category: this.item.category,
      detail: this.item.url
    }
    this.$state.transitionTo('root.category.detail', stateOptions, {reload: true});
  }
}

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