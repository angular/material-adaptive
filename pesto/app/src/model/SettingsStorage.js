/**
 * In-memory implementation of settings store.
 */

const DEFAULT_SETTINGS = {
  userName: 'Zack Gibson',
  publicProfile: true,
  dailyDigest: false,
  emailNotifications: false,
  textNotifications: false,
  // This would be an ES6 Set but angular.copy doesn't suport it.
  favoriteRecipeIds: {},
};

class SettingsStorage {
  constructor($q) {
    this.q_ = $q;
    this.settings = DEFAULT_SETTINGS;
  }

  // Simulate async reads and writes by returning promises.
  readSettings() {
    return this.q_.when(angular.copy(this.settings));
  }

  saveSettings(settings) {
    this.settings = angular.copy(settings);
    return this.q_.when();
  }
}

export default SettingsStorage;
