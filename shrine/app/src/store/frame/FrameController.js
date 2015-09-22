/**
 * Main App Controller for the Angular Material Starter App
 */
class FrameController {

  constructor($mdSidenav, $mdMedia, $mdBottomSheet, $log, $location, $state, SharingService) {
    this.searchTerm = $state.params.searchTerm;
    let stateData = $state.current.views.frame.data;
    this.isSearch = stateData.isSearch;
    

    this.$location = $location;
    this.$log = $log.getInstance("FrameController");
    this.$log.debug("instanceOf()");
    this.$mdSidenav = $mdSidenav;
    this.$mdMedia = $mdMedia;
    this.$mdBottomSheet = $mdBottomSheet;
    
    this.categories = [
      { title: 'Feature'},
      { title: 'Latest'},
      { title: 'Fashion'},
      { title: 'Furniture'},
      { title: 'Beauty'},
      { title: 'Food'},
      { title: 'Travel'},
      { title: 'Kids'}
    ];

    this.sharingOptions = SharingService.sharingOptions;
  }

  /**
   * Navigates to the search page.
   */
  openSearch() {
    this.$location.url('search/');
  }

  /**
   * Navigates to the search page.
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
   * Select a category.
   * @param index Index of the selected category.
   */
  selectCategory(index) {
    this.$log.debug( "selectCategory({})", index);

    this.selectedIdx = index;
    this.$mdSidenav('left').close()
  }

  currentCategory() {
    return this.categories[this.selectedIdx];
  }
}

FrameController.$inject = [ '$mdSidenav', '$mdMedia', '$mdBottomSheet', '$log', '$location', '$state', 'SharingService'];
export default FrameController;
