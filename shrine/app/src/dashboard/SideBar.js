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
    this._$location = $location
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
    let category = categoryName.toLowerCase();
    this._$log.debug(`goToCategory( ${category} )`);

    this._$location.path(`/${category}`);
  }

}

export default {
  name : 'sideBar',
  config : {
    bindings : {  categories : '<', selected : '<' },
    controller: [ '$scope', '$shrineMQObserver', '$location', '$log',SideBarController ],
    templateUrl : 'src/dashboard/tmpl/sideBar.html'
  }
};
