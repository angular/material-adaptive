class SettingsController {

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
    // TODO: Better async.
    this.SettingsStorage.readSettings().then((settings) => {
      this.userSettings = settings;
    });
  }

  isSmallDeviceScreen() {
    return this.mdMedia_('max-width: 680px');
  }

  toggleContent(ev, settingOption) {
    ev.stopPropagation();
    settingOption.show_content_default = !settingOption.show_content_default;
  }

  close(ev) {
    ev.stopPropagation();
    this.location_.path('/');
  }

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
