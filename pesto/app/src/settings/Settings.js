import BaseAdaptiveController from './../utils/BaseAdaptiveController'

/**
 * Controller for the settings page.
 */
class SettingsController extends  BaseAdaptiveController {
  /**
   * @constructor
   * @param {!angular.Scope} $scope
   * @param {!angular.Location} $location
   * @param {!md.$toast} $mdToast
   * @param {!Object} pestoMQObserver
   * @param {!Object} pestoData
   * @param {!angular.Log} $log
   */
  constructor($scope, $location, $mdToast, pestoMQObserver, pestoData, $log ) {
    super($scope, pestoMQObserver, $log.getInstance("SettingsController"));

    this.$scope = $scope;
    this._$location = $location;
    this._$mdToast = $mdToast;
    this._data = pestoData;
    this.settings = {};
  }

  $onInit() {
    this._gatherSettingsData();
    this._listenForAdaptiveChanges();
  }


  /**
   * Toggles the content.
   * @param {!event} ev Click event.
   * @param {!Object} settingOption
   */
  toggleContent(ev, settingOption) {
    ev.stopPropagation();
    settingOption.show_content_default = !settingOption.show_content_default;
  }


  /**
   * Closes settings.
   */
  close(ev) {
    ev.stopPropagation();
    this._$location.path('/');
  }


  /**
   * Saves settings.
   * @param {!event} ev Click event.
   */
  save(ev) {
    ev.stopPropagation();
    this._data
      .saveSettings(this.settings)
      .then(() => {
        this._$location.path('/');
        // Toast positioning seems flaky.
        this._$mdToast.showSimple('Settings saved');
      });
  }


  /**
   * Saves the settings state.
   * @param {!event} ev Click event.
   */
  saveState() {
    this._data.saveSettings(this.settings).then(() => {});;
  }

  // ******************************
  // Private Methods
  // ******************************

  /**
   * Fetches all the settings data.
   */
  _gatherSettingsData() {
    this._data
      .readSettings()
      .then(settings => {
        this.settings = settings;
      });
  }

  /**
   * Listen for Adaptive changes and update the view
   */
  _listenForAdaptiveChanges() {
   this._$log.debug(`_listenForAdaptiveChanges( )`);

   this.subscribeToAdaptiveChanges((viewPort) => {
     this._$log.debug(`onAdaptiveChange( ${viewPort.viewport} )`);
     this.isSmallDeviceScreen = (viewPort.minWidth <= 680);
   });
  }
}

export default {
  name : 'settings',
  config : {
    controllerAs: '$ctrl',
    controller: [ '$scope', '$location', '$mdToast', 'pestoMQObserver', 'pestoData', '$log', SettingsController ],
    templateUrl : 'src/settings/tmpl/settings.html',
  }
};
