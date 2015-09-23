/**
 * Main App Controller for the Angular Material Starter App
 * @param $mdSidenav
 * @param $mdLog
 * @constructor
 */
class HomeController {

  constructor($scope, $location, $mdSidenav, $log, RecipeStorage) {
    $scope.pageClass = 'pesto-home-page';

    this.location_ = $location;
    this.mdSidenav_ = $mdSidenav;
    this.recipeStorage_ = RecipeStorage;

    this.recipeStorage_.getAllRecipes().then((recipes) => {
      this.recipes = recipes;
    });
  }
  
  toggleSideNav() {
    this.mdSidenav_('left').toggle();
  }
  
  gotoSettings() {
    this.location_.path('/settings');
  }

}

HomeController.$inject = ['$scope', '$location', '$mdSidenav', '$log', 'RecipeStorage'];

export default HomeController;
