class SettingsController {

  constructor($scope, $location) {
    $scope.pageClass = 'pesto-settings-page';

    this.location_ = $location;
    this.preferences = {userName: 'Zack Gibson'};
  }
  
  goBack() {
    this.location_.path('/home');
  }

}

SettingsController.$inject = ['$scope', '$location'];

export default SettingsController;
