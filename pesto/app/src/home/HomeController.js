/**
 * Main App Controller for the Angular Material Starter App
 * @param $mdSidenav
 * @param $mdLog
 * @constructor
 */
class HomeController {

  constructor($scope, $location, $mdSidenav, $mdMedia, $log, RecipeStorage) {
    $scope.pageClass = 'pesto-home-page';

    this.location_ = $location;
    this.mdSidenav_ = $mdSidenav;
    this.mdMedia_ = $mdMedia;
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

  isScreenSmall() {
    return this.mdMedia_('sm');
  }

}

HomeController.$inject = ['$scope', '$location', '$mdSidenav', '$mdMedia', '$log', 'RecipeStorage'];

export default HomeController;
