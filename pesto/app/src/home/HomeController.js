/**
 * Controller for the home page.
 */
class HomeController {

  /**
   * @constructor
   * @param {!angular.Scope} $scope
   * @param {!window} $window
   * @param {!angular.Location} $location
   * @param {!angular.Timeout} $timeout
   * @param {!md.$sidenav} $mdSidenav
   * @param {!md.$media} $mdMedia
   * @param {!Object} PestoDomUtils
   * @param {!Object} RecipeStorage
   */
  constructor($scope, $window, $location, $timeout, $mdSidenav, $mdMedia,
        PestoDomUtils, RecipeStorage) {
    this.location_ = $location;
    this.mdSidenav_ = $mdSidenav;
    this.recipeStorage_ = RecipeStorage;
    this.mdMedia = $mdMedia;

    this.body_ = $window.document.body;
    this.body_.setAttribute('view', 'homepage-view');
    this.recipes = [];

    // Window onscroll event. Updates the state on the body.
    const scrollListener = () => {
      if (this.body_.scrollTop > 0) {
        this.body_.classList.add('scroll');
      } else {
        this.body_.classList.remove('scroll');
      }
    };
    $window.addEventListener('scroll', scrollListener);
    // Remove the listener when route changes.
    $scope.$on('$locationChangeStart', () => {
      $window.removeEventListener('scroll', scrollListener);
    });

    PestoDomUtils.updateViewportDOM();
    this.fetchRecipes();
  }

  /**
   * Fetches all recipes.
   */
  fetchRecipes() {
    this.recipeStorage_.getAllRecipes().then((recipes) => {
      if (!angular.equals(recipes, this.recipes)) {
        this.recipes = recipes;
      }
    });
  }

  /**
   * Opens sidenav
   */
  openSidenav() {
    this.body_.classList.add('sidenav-open');
    this.mdSidenav_('primary').open();
  }

  /**
   * Hides sidenav
   */
  hideSidenav() {
    this.body_.classList.remove('sidenav-open');
    this.mdSidenav_('primary').close();
  }

  /**
   * Redirects to the url.
   * @param {!event} ev Click event.
   * @param {!String} url
   */
  goTo(ev, url) {
    ev.stopPropagation();
    this.hideSidenav();
    this.location_.path(url);
  }

  /**
   * Redirects to the recipe.
   * @param {!event} ev Click event.
   * @param {!String} idx
   */
  goToCard(ev, idx) {
    ev.stopPropagation();
    this.goTo(ev, '/recipe/' + idx);
  }
}

HomeController.$inject = [
    '$scope', '$window', '$location', '$timeout', '$mdSidenav', '$mdMedia', 'PestoDomUtils', 'RecipeStorage'
];

export default HomeController;
