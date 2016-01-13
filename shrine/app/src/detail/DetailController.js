class DetailController {
  constructor($scope, $routeParams, $location, $log, ItemStorage, ShrineDomUtils) {
    this.$log = $log.getInstance("DetailController");
    this.$log.debug("instanceOf()");
    this.$log.debug(ItemStorage);
    this.idItem = $routeParams.id || 0;
    this.$location = $location;
    var currentItem = {};
    this._$itemStorage = ItemStorage;
    this.selectedItem = {};
    this.fetchItems();
    this.viewport = ShrineDomUtils.getViewport();
    this.viewport.current.updated = () => {
      this.$scope.$apply();
    }

    //DELETE: DRY
    this.currentViewport = this.viewport.current;
  }

  //DELETE: DRY
  fetchItems() {
    this._$itemStorage.getAllItems().then((items) => {
      if (!angular.equals(items, this.items)) {
        this.items = items;
        this.selectedItem = this.items[this.idItem];
        console.log(this.items);
      }
    });
  }

  goToHomepage(ev) {
    ev.stopPropagation();
    this.$location.path('/');
  }
}


DetailController.$inject = [ '$scope', '$routeParams', '$location', '$log', 'ItemStorage', 'ShrineDomUtils' ];
export default DetailController;
