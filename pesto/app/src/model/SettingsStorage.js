/**
 * In-memory implementation of settings store.
 */

const STORE = {
  userName: 'Jonathan',
  publicProfile: true,
  dailyDigest: false,
  emailNotifications: false,
  textNotifications: false,
  // This would be an ES6 Set but angular.copy doesn't suport it.
  favoriteRecipeIds: {},
  properties: [{
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
    "show_content_default": true,
    "options": [
      {
        "name": "Get email notifications",
        "key": "emailNotifications",
      }, {
        "name": "Get text notifications",
        "key": "textNotifications",
      }
    ],
  }]
};

export default STORE;
