/**
 * Main App Controller for the Angular Material Starter App
 */
class FrameController {

  constructor($scope, $mdSidenav, $mdMedia, $mdBottomSheet, $mdToast, $log, $state, SharingService, ItemsService) {
    this.$log = $log.getInstance("FrameController");
    this.$log.debug("instanceOf()");

    this.searchTerm = $state.params.searchTerm;
    this.isSearch = $state.current.data.isSearch;
    this.hasBack = $state.current.data.hasBack || this.isSearch;
    this.isDetailView = ($state.current.name == 'root.category.detail');
    
    this.$state = $state;
    this.$mdToast = $mdToast;
    this.$mdSidenav = $mdSidenav;
    this.$mdMedia = $mdMedia;
    this.$mdBottomSheet = $mdBottomSheet;    
    this.initialLoadComplete = false;

    this.categories = ItemsService.categories;
    this.sharingOptions = SharingService.sharingOptions;
    
    if (this.isSearch) {
      $scope.$watch(
        function() {
          return $state.params.searchTerm
        },
        angular.bind(this, function(searchTerm) {
          this.$state.go('root.search', {'searchTerm': searchTerm}, {reload: false});
        }));
    }
  }

  /**
   * Navigates to the search page.
   */
  openSearch() {
    this.$state.go('root.search', {}, {reload: true});
  }

  /**
   * Opens the share menu.
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
   * Returns back to the category view.
   */
  goBack() {
    this.$state.go('root.category', {}, {reload: true});
  }

  /**
   * Select a category.
   * @param index Index of the selected category.
   */
  selectCategory(category) {
    if (!this.initialLoadComplete) {
      this.initialLoadComplete = true;
      return;
    }
    this.$mdSidenav('left').close()
    this.$state.go('root.category', {category: category.url});
  }

  /**
   * Returns the currently selected category.
   */
  currentCategory() {
    return this.categories[this.$state.params.category];
  }

  /**
   * Shows a toast message to recognized the click, acknowleding an action would have taken place.
   * @param option The option to acknowledge the action of.
   */
  acknowledgeAction(option) {
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
