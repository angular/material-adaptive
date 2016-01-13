class DetailController {
  constructor($scope, $window, $log, $state, $location, itemsService, ShrineDomUtils) {
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
    this.currentViewport = this.ShrineDomUtils.currentViewport;

    $scope.$watch(() => { return this.ShrineDomUtils.currentViewport; }, (newValue, oldValue) => {
      if (newValue !== oldValue) {
        this.currentViewport = newValue;
      }
    });

    this.detailView_ = document.body.querySelector('.shrine-view-detail .detail-view');

    // Details view onscroll event. Updates the state on the body.
    const scrollListener = () => {
      if (this.detailView_.scrollTop > 0) {
        document.body.classList.add('scroll');
      } else {
        document.body.classList.remove('scroll');
      }
    };

    this.detailView_.onscroll = scrollListener;

    // Remove the listener when route changes.
    $scope.$on('$locationChangeStart', () => {
      document.body.classList.remove('scroll');
    });
  }

  showDetail(item) {
    var stateOptions = {
      category: item.category,
      detail: item.url
    }
    this.$state.transitionTo('root.category.detail', stateOptions, {reload: true});
  }
}



DetailController.$inject = [ '$scope', '$window', '$log', '$state', '$location', 'ItemsService', 'ShrineDomUtils' ];
export default DetailController;
