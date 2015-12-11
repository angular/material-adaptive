class DetailController {
  constructor($log,  $state, $location, itemsService, ShrineDomUtils) {
    this.$log = $log.getInstance("DetailController");
    this.$log.debug("instanceOf()");
    this.$log.debug(itemsService);

    this.$state = $state;
    
    if (!this.$state.params.detail) {
      this.$state.go('^', {category: $state.params.category});
    }

    var currentItem = {};
    this.items = itemsService.getItems($state.params.category);
    this.items.some(function(item) {
      if (item.url == $state.params.detail) {
        return (currentItem = item);
      }
    })
    this.selectedItem = currentItem;
    this.ShrineDomUtils = ShrineDomUtils;
    this.ShrineDomUtils.updateViewName('detail');
  }

  showDetail(item) {
    var stateOptions = {
      category: item.category,
      detail: item.url
    }
    this.$state.transitionTo('root.category.detail', stateOptions, {reload: true});
  }
}



DetailController.$inject = [ '$log', '$state', '$location', 'ItemsService', 'ShrineDomUtils' ];
export default DetailController;
