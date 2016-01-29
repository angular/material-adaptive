class DetailController {
  /**
   * @constructor
   * @param {!angular.Scope} $scope
   * @param {!angular.RouteParams} $routeParams
   * @param {!angular.Location} $location
   * @param {!angular.Log} $log
   * @param {!Object} ItemStorage
   * @param {!Object} ShrineDomUtils
   */
  constructor($scope, $routeParams, $location, $log, ItemStorage, ShrineDomUtils) {
    this.$log = $log.getInstance("DetailController");
    this.idItem = $routeParams.id || 0;
    this.$location = $location;
    this._$itemStorage = ItemStorage;
    this.viewport = ShrineDomUtils.getViewport();
    this.viewport.current.updated = () => {
      this.$scope.$apply();
    }

    //Fetches item by item id.
    ItemStorage.getItem(this.idItem).then((item) => {
      if (!angular.equals(item, this.selectedItem)) {
        this.selectedItem = item;
      }
    });
  }

  /**
   * Redirects to the homepage.
   * @param {!event} ev Click event.
   * @param {!String} idItem
   */
  goToHomepage(ev) {
    ev.stopPropagation();
    this.$location.path('/');
  }
}


DetailController.$inject = [ '$scope', '$routeParams', '$location', '$log', 'ItemStorage', 'ShrineDomUtils' ];
export default DetailController;
