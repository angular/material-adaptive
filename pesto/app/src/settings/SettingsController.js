class SettingsController {

  /**
   * @constructor
   * @param {!angular.Location} $location
   * @param {!md.$toast} $mdToast
   * @param {!md.$media} $mdMedia
   * @param {!Object} PestoDomUtils
   * @param {!Object} SettingsStorage
   */
  constructor($location, $mdToast, $mdMedia, PestoDomUtils, SettingsStorage) {
    this.location_ = $location;
    this.mdToast_ = $mdToast;
    this.mdMedia_ = $mdMedia;
    this.PestoDomUtils = PestoDomUtils;
    // "key" values should match properties in SettingsStorage.
    this.settings_data = [{
      "name": "Account",
      "show_content_default": true,
      "options": [
        {
          "name": "Public profile",
          "key": "publicProfile",
        }, {
          "name": "Subscribe to daily digest",
          "key": "dailyDigest",
        }
      ],
      "show_user_name": true,
    }, {
      "name": "Notification",
      "show_content_default": false,
      "options": [
        {
          "name": "Get email notifications",
          "key": "emailNotifications",
        }, {
          "name": "Get text notifications",
          "key": "textNotifications",
        }
      ],
    }];
    this.body_ = document.body;
    this.body_.setAttribute('view', 'settings-view');

    this.SettingsStorage = SettingsStorage;
    this.userSettings = {};

    this.SettingsStorage.readSettings().then((settings) => {
      this.userSettings = settings;
    });
  }

  /**
   * Returns if device screen is small.
   */
  isSmallDeviceScreen() {
    return this.mdMedia_('max-width: 680px');
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
    this.location_.path('/');
  }

  /**
   * Saves settings.
   * @param {!event} ev Click event.
   */
  save(ev) {
    ev.stopPropagation();
    this.SettingsStorage.saveSettings(this.userSettings).then(() => {
      this.location_.path('/');
      // Toast positioning seems flaky.
      this.mdToast_.showSimple('Settings saved');
    });
  }
}

SettingsController.$inject = [
    '$location', '$mdToast', '$mdMedia', 'PestoDomUtils', 'SettingsStorage'];

export default SettingsController;
