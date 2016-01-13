class SearchController {
  constructor($scope, $log, $state, $window, $location, itemsService) {
    this.$window = $window;
    this.$state = $state;
    var allItems = itemsService.getItems();

    $scope.$watch(
      () =>  {
        return $state.params.searchTerm;
      },
      (searchTerm) => {
        $log.debug("Got search " + searchTerm);
        searchTerm = $state.params.searchTerm.toLowerCase();
        this.items = allItems.filter((item) => {
          var itemName = item.name.toLowerCase();
          return itemName.includes(searchTerm);
        });
        // Replace the location history so navigation works as expected.
        $location.search({'searchTerm': searchTerm}).replace();
      });
  }

  goBack() {
    this.$window.history.back();
  }
}

SearchController.$inject = ['$scope', '$log', '$state', '$window', '$location', 'ItemsService' ];
export default SearchController;
