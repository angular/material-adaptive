/**
 * Main App Controller for the Angular Material Starter App
 */
class CatalogController {
  constructor($log, itemsService) {
    this.$log = $log.getInstance("CatalogController");
    this.$log.debug("instanceOf()");
    this.$log.debug(itemsService);

    this.items = itemsService.items;
    this.selectedItem = this.items[0];
  }

  selectItem(item) {
    this.selectedItem = item;
  }
}

CatalogController.$inject = [ '$log', 'ItemsService' ];
export default CatalogController;
