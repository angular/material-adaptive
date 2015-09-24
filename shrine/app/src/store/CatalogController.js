/**
 * Main App Controller for the Angular Material Starter App
 */
class CatalogController {
  constructor($log, itemsService) {
    this.$log = $log.getInstance("CatalogController");
    this.$log.debug("instanceOf()");
    this.$log.debug(itemsService);

    this.items = itemsService.items;
    this.selectedItem = 0;
  }

  selectItem(itemIdx) {
    this.$log.debug(itemIdx);
    this.selectedItem = itemIdx;
  }
}

CatalogController.$inject = [ '$log', 'ItemsService' ];
export default CatalogController;
