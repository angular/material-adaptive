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
    this.showingDetail = false;
  }

  selectItem(item) {
    this.selectedItem = item;
  }

  showDetail(item) {
    this.selectItem(item);
    this.showingDetail = true;
  }

  hideDetail() {
    this.showingDetail = false;
  }
}

CatalogController.$inject = [ '$log', 'ItemsService' ];
export default CatalogController;
