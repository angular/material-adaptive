/**
 * Controller for Navigation Frame.
 */
class FrameController {

  constructor($scope, $mdSidenav, $mdMedia, $mdBottomSheet, $mdToast, $log, $state, SharingService, ItemsService) {
    var that = this;
    that.$log = $log.getInstance("FrameController");
    that.$log.debug("instanceOf()");

    that.searchTerm = $state.params.searchTerm;
    that.isSearch = $state.current.data.isSearch;
    that.hasBack = $state.current.data.hasBack || that.isSearch;
    that.isDetailView = ($state.current.name == 'root.category.detail');
    that.categories = ItemsService.categories;
    that.sharingOptions = SharingService.sharingOptions;
       
    that.$state = $state;
    that.$mdToast = $mdToast;
    that.$mdSidenav = $mdSidenav;
    that.$mdMedia = $mdMedia;
    that.$mdBottomSheet = $mdBottomSheet;

    if (that.isSearch) {
      $scope.$watch(
        function() {
          return $state.params.searchTerm
        },
        function(searchTerm) {
          that.$state.go('root.search', {'searchTerm': searchTerm}, {reload: false});
        });
    }

    angular.forEach(that.categories, function(category, idx) {
      if (category.url == $state.params.category) {
        that.setTabIndex(idx);
      }
    });
  }

  /**
   * Navigates to the search page.
   */
  openSearch() {
    this.$log.debug( "openSearch() ");
    this.$state.go('root.search', undefined, {reload: true});
  }

  /**
   * Opens the sharing menu, either using a bottom sheet or popup menu as appropriate.
   */
  openShareMenu() {
    this.$log.debug( "openShareMenu() ");
    var that = this;
    if (that.$mdMedia('sm')) {
      return that.$mdBottomSheet.show({
        templateUrl: 'src/store/sharingmenu/sharingmenu.html',
        controller: 'SharingMenuController',
        controllerAs: 'ctrl',
        locals: {
          'acknowledgeAction': that.acknowledgeAction
        }
      }).then(function(option) {
        that.acknowledgeAction(option);
      });      
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
    this.$log.debug( "goBack() ");
    if (this.isSearch) {
      this.$state.go('root.category', {'category': 'featured'}, {reload: true});
    } else {
      this.$state.go('^', {}, {reload: true});
    }
  }

  /**
   * Select a category.
   * @param index Index of the selected category.
   */
  selectCategory(category) {
    this.$log.debug( "selectCategory() ");
    if (!this.initialLoadComplete) {
      this.initialLoadComplete = true;
      return;
    }
    this.$mdSidenav('left').close()
    this.$state.go('root.category', {category: category.url}, {reload: true});
  }

  /**
   * Sets tab index, if no index is provided set index to 0.
   * @param {integer} idx The new tab index.
   */
  setTabIndex(idx) {
    this.$log.debug( "setTabIndex() ");
    this.selectedIdx = idx || 0;
  }

  /**
   * Returns the currently selected category.
   */
  currentCategory() {
//    this.$log.debug( "currentCategory() ");
    return this.categories[this.selectedIdx];
  }

  /**
   * Shows a toast message to recognized the click, acknowleding an action would have taken place.
   * @param option The option to acknowledge the action of.
   */
  acknowledgeAction(option) {
    this.$log.debug( "acknowledgeAction() ");
    switch (option) {
      case 'shopping_cart':
        var message = 'You clicked the shopping cart.  We could show a shopping cart modal if we have one.';
        break;
      case 'twitter':
        var message = 'You clicked the Twitter action.  We could launch into twitter sharing.';
        break;
      case 'email':
        var message = 'You clicked the email action.  We could launch into an email widget.';
        break;
      case 'message':
        var message = 'You clicked message action.  We could launch a messaging widget';
        break;
      case 'facebook':
        var message = 'You clicked Facebook action.  We could launch a Facebook widget';
        break;
      default:
        var message = 'You clicked on an item.  We could take an action now.';
    }
    this.$mdToast.show(this.$mdToast.simple().content(message));
  }

}

FrameController.$inject = ['$scope', '$mdSidenav', '$mdMedia', '$mdBottomSheet', '$mdToast', '$log', '$state', 'SharingService', 'ItemsService'];
export default FrameController;
