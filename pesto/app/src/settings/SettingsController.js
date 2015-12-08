class SettingsController {

  constructor($location, $mdMedia, PestoDomUtils) {
    this.location_ = $location;
    this.mdMedia_ = $mdMedia;
    // TODO: Move this to a service.
    this.settings_data = [{
      "name": "Account",
      "show_content_default": true,
      "options": [
        {
          "name": "Public profile",
          "value": true
        }, {
          "name": "Subscribe to daily digest",
          "value": false
        }
      ],
      "extra_info": {
        "user_name": "Zach Gibson"
      }
    }, {
      "name": "Notification",
      "show_content_default": false,
      "options": [
        {
          "name": "Get email notification",
          "value": false
        }, {
          "name": "Get text notification",
          "value": false
        }
      ],
      "extra_info": false
    }];
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
  }
}

SettingsController.$inject = ['$location', '$mdMedia', 'PestoDomUtils'];

export default SettingsController;
