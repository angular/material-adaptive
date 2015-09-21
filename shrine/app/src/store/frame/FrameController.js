/**
 * Main App Controller for the Angular Material Starter App
 */
class FrameController {
  //let $location = null;

  constructor($mdSidenav, $log, $location, $state, $stateParams) {
    this.searchTerm = $stateParams.searchTerm;
    let stateData = $state.current.views.frame.data;
    this.isSearch = stateData.isSearch;
    this.$location = $location;
    this.$log = $log.getInstance("FrameController");
    this.$log.debug("instanceOf()");
    this.$mdSidenav = $mdSidenav;
    
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
  }

  openSearch() {
    this.$location.url('search/');
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

FrameController.$inject = [ '$mdSidenav', '$log', '$location', '$state', '$stateParams' ];
export default FrameController;
