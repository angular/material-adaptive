import BaseAdaptiveController from './../utils/BaseAdaptiveController'

// Controller for the item card.
class SideBarController extends  BaseAdaptiveController {
  /**
   * @constructor
   * @param {!angular.Scope} $scope
   * @param {!Object} pestoMQObserver
   */
  constructor($scope, pestoMQObserver, $location, $log) {
    super($scope, pestoMQObserver, $log.getInstance("SideBarController"));
    this._$location = $location
  }

  /**
   * Redirects to the settings page.
   */
  goToSettings() {
     this._$location.path('/settings');
  }

}

export default {
  name : 'sideBar',
  config : {
    controller: [ '$scope', 'pestoMQObserver', '$location', '$log', SideBarController ],
    templateUrl : 'src/dashboard/tmpl/sideBar.html'
  }
};
