import BaseAdaptiveController from './../utils/BaseAdaptiveController'

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

export default {
  name : 'sideBar',
  config : {
    controllerAs: '$ctrl',
    bindings : {  categories : '<', selected : '<' },
    controller: [ '$scope', '$shrineMQObserver', '$location', '$log',SideBarController ],
    templateUrl : 'src/dashboard/tmpl/sideBar.html'
  }
};
