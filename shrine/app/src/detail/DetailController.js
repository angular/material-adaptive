class DetailController {
  constructor($scope, $routeParams, $location, $log, ItemStorage, ShrineDomUtils) {
    this.$log = $log.getInstance("DetailController");
    this.$log.debug("instanceOf()");
    this.$log.debug(ItemStorage);
    this.idItem = $routeParams.id || 0;
    this.$location = $location;
    this._$itemStorage = ItemStorage;
    this.viewport = ShrineDomUtils.getViewport();
    this.viewport.current.updated = () => {
      this.$scope.$apply();
    }
        
    ItemStorage.getItem(this.idItem).then((item) => {
      if (!angular.equals(item, this.selectedItem)) {
        this.selectedItem = item;
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
