class CatalogController {
  constructor($scope, $log, $state, itemsService) {
    this.$log = $log.getInstance("CatalogController");
    this.$log.debug("instanceOf()");
    this.$log.debug(itemsService);

    this.$state = $state;

    var originalItems = itemsService.getItems($state.params.category);
    
    if (this.$state.is('root.search')) {
      $scope.$watch(
        function() {
          return $state.params.searchTerm
        },
        angular.bind(this, function(searchTerm) {
          searchTerm = $state.params.searchTerm.toLowerCase();
          var items = [];
          angular.forEach(originalItems, function(item) {
            var itemName = item.name.toLowerCase();
            itemName.includes(searchTerm) && items.push(item);
          })
          this.items = items;
          // TODO: Debounce this?
          $state.go('root.search', {'searchTerm': searchTerm});
        }));
    } else {
      this.items = angular.copy(originalItems);
    }
  }
}

CatalogController.$inject = ['$scope', '$log', '$state', 'ItemsService' ];
export default CatalogController;
