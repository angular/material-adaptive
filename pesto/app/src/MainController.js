class MainController {
  constructor($mdMedia) {
    this.mdMedia_ = $mdMedia;
    console.log('MainController');
  }

  isScreenSmall() {
    return this.mdMedia_('sm');
  }
}

MainController.$inject = ['$mdMedia'];

export default MainController;
