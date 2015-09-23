/**
 * Main App Controller for the Angular Material Starter App
 * @param $mdSidenav
 * @param $mdLog
 * @constructor
 */
class SettingsController {

  constructor($scope, $location) {
    $scope.pageClass = 'pesto-settings-page';

    this.location_ = $location;
    this.preferences = {};
  }
  
  goBack() {
    this.location_.path('/home');
  }
  
}

SettingsController.$inject = ['$scope', '$location'];

export default SettingsController;
