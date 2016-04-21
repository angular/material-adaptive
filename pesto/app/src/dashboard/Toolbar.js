import BaseAdaptiveController from './../utils/BaseAdaptiveController'

// Controller for the item card.
class ToolbarController extends  BaseAdaptiveController {
  /**
   * @constructor
   * @param {!angular.Scope} $scope
   * @param {!Object} pestoMQObserver
   * @param {!md.$sidenav} $mdSidenav
   * @param {!angular.Log} $log
   */
  constructor($scope, pestoMQObserver, $mdSidenav, $log) {
    super($scope, pestoMQObserver, $log.getInstance("ToolbarController"));
    this._sideNav = $mdSidenav;
  }

  // ******************************
  // Public Methods
  // ******************************

  /**
   * Opens sidenav
   */
  openSidenav() {
    this._$log.debug(`openSidenav( )`);
    this._sideNav('primary').open();
  }


  /**
   * Hides sidenav
   */
  hideSidenav() {
    this._$log.debug(`hideSidenav( )`);
    this._sideNav('primary').close();
  }
}

export default {
  name : 'toolbar',
  config : {
    controller: [ '$scope', 'pestoMQObserver', '$mdSidenav', '$log', ToolbarController ],
    templateUrl : 'src/dashboard/tmpl/toolbar.html'
  }
};
