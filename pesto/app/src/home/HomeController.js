/**
 * Main App Controller for the Angular Material Starter App
 * @param $mdSidenav
 * @param $mdLog
 * @constructor
 */
class HomeController {

  constructor($scope, $window, $location, $mdSidenav, $mdMedia, $log, RecipeStorage) {
    $scope.pageClass = 'pesto-home-page';

    this.location_ = $location;
    this.mdSidenav_ = $mdSidenav;
    this.mdMedia_ = $mdMedia;
    this.recipeStorage_ = RecipeStorage;
    
    this.isSearchVisible = false;
    this.searchString = '';
    this.fetchRecipes();

    this.setupLogoUpdate($window, $scope);
  }

  /**
   * Hack to allow the image in the upper part of the logo to appear to scroll
   * into the header. On every scroll or resize event, we compute the bounding
   * rect of the normal logo image, and then set the position of a fixed
   * position image, clipped to a positive value which makes it appear in the
   * header. The effect is that when the logo scrolls up, the image gets
   * pinned at the top.
   */
  setupLogoUpdate($window, $scope) {
    const scrollDiv = $window.document.querySelector('.pesto-home-scrollable');
    const logoImage = scrollDiv.querySelector('img.pesto-banner-top');
    const stickyLogo = $window.document.querySelector('img.pesto-sticky-logo');

    const updateLogo = () => {
      const headerHeight = 48;
      const imgRect = logoImage.getBoundingClientRect();
      const minTop = Math.round((headerHeight - imgRect.height) / 2);
      stickyLogo.style.top = Math.max(minTop, imgRect.top) + 'px';
      stickyLogo.style.left = imgRect.left + 'px';
      stickyLogo.style.height = imgRect.height + 'px';
      stickyLogo.style.width = imgRect.width + 'px';
    };

    updateLogo();

    scrollDiv.addEventListener('scroll', updateLogo);
    $window.addEventListener('resize', updateLogo);

    $scope.$on('$routeChangeStart', () => {
      console.log('Removing events');
      scrollDiv.removeEventListener('scroll', updateLogo);
      $window.removeEventListener('resize', updateLogo);
    });
  }

  fetchRecipes() {
    var updateRecipes = (recipes) => {
      if (!angular.equals(recipes, this.recipes)) {
        this.recipes = recipes;
      }
    };
    if (this.isSearchVisible && this.searchString) {
      this.recipeStorage_.searchRecipes(this.searchString).then(updateRecipes);
    } else {
      this.recipeStorage_.getAllRecipes().then(updateRecipes);
    }
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
  
  toggleSearchVisible() {
    this.isSearchVisible = !this.isSearchVisible;
    if (!this.isSearchVisible) {
      this.fetchRecipes();
    }
  }
  
  clearSearch() {
    this.searchString = '';
    this.fetchRecipes();
  }

  gotoRecipe(recipe) {
    this.location_.path('/recipe/' + recipe.id);
  }
}

HomeController.$inject = [
    '$scope', '$window', '$location', '$mdSidenav', '$mdMedia', '$log', 'RecipeStorage'
];

export default HomeController;
