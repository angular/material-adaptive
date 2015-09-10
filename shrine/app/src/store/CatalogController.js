/**
 * Main App Controller for the Angular Material Starter App
 * @param $mdSidenav
 * @param $mdLog
 * @constructor
 */
class CatalogController {

  constructor($mdSidenav, $log) {
    $log = $log.getInstance("CatalogController");
    $log.debug("instanceOf()");
    $log.debug($mdSidenav);
    $log.debug($log);

    var self = this;

    self.categories = [
      { title: 'Feature'},
      { title: 'Latest'},
      { title: 'Fashion'},
      { title: 'Furniture'},
      { title: 'Beauty'},
      { title: 'Food'},
      { title: 'Travel'},
      { title: 'Kids'}
    ];
  }

  /**
   * Hide or Show the category menu.
   */
  toggleMenu($event) {
    $log.debug( "toggleMenu() ");
    $mdSidenav('left').toggle();
  }

  /**
   * Select a category.
   * @param category
   */
  selectCategory ( category ) {
    $log.debug( "selectCategory( {title} ) ", category);

    self.selected = angular.isNumber(user) ? $scope.users[user] : user;
    self.toggleMenu();
  }
}

CatalogController.$inject = [ '$mdSidenav', '$log' ]

export default CatalogController;
