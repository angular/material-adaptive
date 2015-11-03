/**
 * Controller for the home page.
 */
class HomeController {

  constructor($scope, $window, $location, $timeout, $mdSidenav, $mdMedia, RecipeStorage) {
    $scope.pageClass = 'pesto-home-pageq';

    this.location_ = $location;
    this.mdSidenav_ = $mdSidenav;
    this.mdMedia_ = $mdMedia;
    this.recipeStorage_ = RecipeStorage;
    
    this.isSearchVisible = false;
    this.isPersistentSidebarVisible = false;
    this.searchString = '';
    this.fetchRecipes();

    this.setupLogoUpdate($window, $scope, $timeout);
  }

  /**
   * Hack to allow the image in the upper part of the logo to appear to scroll
   * into the header. On every scroll or resize event, we compute the bounding
   * rect of the normal logo image, and then set the position of a fixed
   * position image, clipped to a positive value which makes it appear in the
   * header. The effect is that when the logo scrolls up, the image gets
   * pinned at the top.
   */
  setupLogoUpdate($window, $scope, $timeout) {
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
    $timeout(updateLogo, 20);

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
    if (this.isWindowLarge()) {
      if (this.mdSidenav_('left').isLockedOpen()) {
        this.isPersistentSidebarVisible = !this.isPersistentSidebarVisible;
        //this.mdSidenav_('left').toggle();
      } else {
        this.isPersistentSidebarVisible = true;
      }
    } else {
      this.mdSidenav_('left').toggle();
    }
  }
  
  gotoSettings() {
    this.location_.path('/settings');
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

  gotoNewRecipe() {
    this.location_.path('/recipe/new');
  }

  isWindowLarge() {
    return this.mdMedia_('(min-width: 1200px)');
  }
}

HomeController.$inject = [
    '$scope', '$window', '$location', '$timeout', '$mdSidenav', '$mdMedia', 'RecipeStorage'
];

export default HomeController;
