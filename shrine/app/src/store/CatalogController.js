class CatalogController {
  constructor($scope, $log, $state, $location, itemsService) {
    this.$log = $log.getInstance("CatalogController");
    this.$log.debug("instanceOf()");
    this.$log.debug(itemsService);

    this.$state = $state;

    var originalItems = itemsService.getItems($state.params.category);
    
    if (this.$state.current.data.isSearch) {
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
        }));
    } else {
      this.items = angular.copy(originalItems);
    }
  }
}

CatalogController.$inject = ['$scope', '$log', '$state', '$location', 'ItemsService' ];
export default CatalogController;
