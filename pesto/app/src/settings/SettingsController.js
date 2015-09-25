/**
 * Main App Controller for the Angular Material Starter App
 * @param $mdSidenav
 * @param $mdLog
 * @constructor
 */
class SettingsController {

  constructor($scope, $location, $mdMedia) {
    $scope.pageClass = 'pesto-settings-page';

    this.location_ = $location;
    this.mdMedia_ = $mdMedia;
    this.preferences = {};
  }
  
  goBack() {
    this.location_.path('/home');
  }

  isScreenSmall() {
    console.log('isScreenSmall:' + this.mdMedia_('gt'));
    return this.mdMedia_('sm');
  }
  
}

SettingsController.$inject = ['$scope', '$location', '$mdMedia'];

export default SettingsController;
