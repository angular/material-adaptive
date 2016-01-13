/**
 * Controller for the home page.
 */
class HomeController {

  constructor($scope, ShrineDomUtils, Utils) {
    
  }
  
  openSidenav() {
    this.body_.classList.add('sidenav-open');
    this.mdSidenav_('primary').open();
  }

  hideSidenav() {
    this.body_.classList.remove('sidenav-open');
    this.mdSidenav_('primary').close();
  }
}

HomeController.$inject = [
    '$scope', 'ShrineDomUtils', 'Utils'
];

export default HomeController;
