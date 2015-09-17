/**
 * Main App Controller for the Angular Material Starter App
 */
class CatalogController {
  constructor($mdSidenav, $log, itemsService) {
    this.$log = $log.getInstance("CatalogController");
    this.$log.debug("instanceOf()");
    this.$log.debug(itemsService);

    this.items = itemsService.items;
    this.$mdSidenav = $mdSidenav;
    console.log(itemsService.items)

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

CatalogController.$inject = [ '$mdSidenav', '$log', 'ItemsService' ];
export default CatalogController;
