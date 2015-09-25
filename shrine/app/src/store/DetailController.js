/**
 * Main App Controller for the Angular Material Starter App
 */
class DetailController {
  constructor($log,  $state, $location, itemsService) {
    this.$log = $log.getInstance("DetailController");
    this.$log.debug("instanceOf()");
    this.$log.debug(itemsService);
    
    if (!$state.params.detail) {
      $state.go('^', {category: $state.params.category});
    }

    var currentItem = {};
    itemsService.getItems($state.params.category).some(function(item) {
      if (item.url == $state.params.detail) {
        return (currentItem = item);
      }
    })
    this.selectedItem = currentItem;
  }
}

DetailController.$inject = [ '$log', '$state', '$location', 'ItemsService' ];
export default DetailController;
