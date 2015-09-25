/**
 * Main App Controller for the Angular Material Starter App
 */
class FrameController {

  constructor($scope, $mdSidenav, $mdMedia, $mdBottomSheet, $log, $state, SharingService, ItemsService) {
    this.$log = $log.getInstance("FrameController");
    this.$log.debug("instanceOf()");

    this.searchTerm = $state.params.searchTerm;
    this.isSearch = $state.current.data.isSearch;
    this.hasBack = $state.current.data.hasBack || this.isSearch;
    
    this.$state = $state;
    this.$mdSidenav = $mdSidenav;
    this.$mdMedia = $mdMedia;
    this.$mdBottomSheet = $mdBottomSheet;    
    this.initialLoadComplete = false;

    this.categories = ItemsService.categories;
    this.sharingOptions = SharingService.sharingOptions;
    
    if (this.isSearch) {
      $scope.$watch(
        function() {
          return $state.params.searchTerm
        },
        angular.bind(this, function(searchTerm) {
          this.$state.go('root.search', {'searchTerm': searchTerm}, {reload: false});
        }));
    }
  }

  /**
   * Navigates to the search page.
   */
  openSearch() {
    this.$state.go('root.search', {}, {reload: true});
  }

  /**
   * Opens the share menu.
   */
  openShareMenu() {
    if (this.$mdMedia('sm')) {
      this.$mdBottomSheet.show({
        templateUrl: 'src/store/frame/share-bottom-sheet.html',
        locals: {
          sharingOptions: this.sharingOptions
        },
        controller: function($scope, sharingOptions) {
          $scope.sharingOptions = sharingOptions;
        }
      });
      return true;
    }
  }

  /**
   * Hide or Show the category menu.
   */
  toggleMenu($event) {
    this.$log.debug( "toggleMenu() ");
    this.$mdSidenav('left').toggle();
  }

  /**
   * Returns back to the category view.
   */
  goBack() {
    this.$state.go('root.category', {}, {reload: true});
  }

  /**
   * Select a category.
   * @param index Index of the selected category.
   */
  selectCategory(category) {
    if (!this.initialLoadComplete) {
      this.initialLoadComplete = true;
      return;
    }
    this.$mdSidenav('left').close()
    this.$state.go('root.category', {category: category.url});
  }

  /**
   * Returns the currently selected category.
   */
  currentCategory() {
    return this.categories[this.$state.params.category];
  }

}

FrameController.$inject = ['$scope', '$mdSidenav', '$mdMedia', '$mdBottomSheet', '$log', '$state', 'SharingService', 'ItemsService'];
export default FrameController;
