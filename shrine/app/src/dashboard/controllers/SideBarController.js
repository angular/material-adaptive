import BaseAdaptiveController from './../../utils/BaseAdaptiveController'

// Controller for the item card.
class SideBarController extends  BaseAdaptiveController {
  /**
   * @constructor
   * @param {!angular.Scope} $scope
   * @param {!Object} $shrineMQObserver
   */
  constructor($scope, $shrineMQObserver, $location, $log) {
    super($scope, $shrineMQObserver, $log.getInstance("SideBarController"));

    this._$log = $log;
    this._$location = $location
    this._$scope = $scope;

    this._$log.debug(`_listenForAdaptiveChanges( )`);
    this.subscribeToAdaptiveChanges((viewPort) => {
      // Do nothing for now...
    });
  }

  /**
   * Returns if the category is the selected one.
   * @param {!String} categoryName
   */
  isCategorySelected(categoryName) {
    var selected = this.selected || "feature";
    return (selected.toLowerCase() === categoryName.toLowerCase());
  }

  /**
   * Redirects to the category tab.
   * @param {!event} ev Click event.
   * @param {!String} categoryName
   */
  goToCategory(categoryName) {
    this._$log.debug(`goToCategory( ${categoryName.toLowerCase()} )`);
    this._$location.path(categoryName.toLowerCase());
  }

}

SideBarController.$inject = [ '$scope', '$shrineMQObserver', '$location', '$log' ];
export default SideBarController;

