/**
 * Main App Controller for the Angular Material Starter App
 * @param $mdSidenav
 * @param $mdLog
 * @constructor
 */
function CatalogController( $mdSidenav, $log ) {
  $log = $log.getInstance( "UsersController" );
  $log.debug( "instanceOf() ");

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
  self.selected = self.categories[0];
  self.toggleMenu = toggleMenu;
  self.selectCategory = selectCategory;

  // *********************************
  // Internal methods
  // *********************************

  /**
   * Hide or Show the category menu.
   */
  function toggleMenu($event) {
    $log.debug( "toggleMenu() ");
    $mdSidenav('left').toggle();
  }

  /**
   * Select a category.
   * @param category
   */
  function selectCategory ( category ) {
    $log.debug( "selectCategory( {title} ) ", category);

    self.selected = angular.isNumber(user) ? $scope.users[user] : user;
    self.toggleMenu();
  }
}

export default [
  '$mdSidenav', '$log', '$log',
  CatalogController
];

