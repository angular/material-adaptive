/**
 * Controller for the home page.
 */
class HomeController {

  constructor($scope, $window, $location, $timeout, $mdSidenav, $mdMedia, PestoDomUtils, RecipeStorage) {
    this.location_ = $location;
    this.mdSidenav_ = $mdSidenav;
    this.recipeStorage_ = RecipeStorage;
    this.mdMedia = $mdMedia;

    this.body_ = $window.document.body;
    this.recipes = [];
    
    // Window onscroll event. Updates the state on the body.
    // TODO: remove this listener when route changes.
    $window.addEventListener('scroll', (e) => {
      if (this.body_.scrollTop > 0) {
        this.body_.classList.add('scroll');
      } else {
        this.body_.classList.remove('scroll');  
      }
    });

    PestoDomUtils.updateViewportDOM();
    this.fetchRecipes();
  }

  fetchRecipes() {
    this.recipeStorage_.getAllRecipes().then((recipes) => {
      if (!angular.equals(recipes, this.recipes)) {
        this.recipes = recipes;
      }
    });
  }
  
  openSidenav() {
    this.body_.classList.add('sidenav-open');
    this.mdSidenav_('primary').open();
  }

  hideSidenav() {
    this.body_.classList.remove('sidenav-open');
    this.mdSidenav_('primary').close();
  }

  goTo(ev, url) {
    ev.stopPropagation();
    this.hideSidenav();
    this.location_.path(url);
  }
  
  goToCard(ev, idx) {
    ev.stopPropagation();
    // self.Body.classList.add('transition-to-details');
    // ev.target.closest('card-element').classList.add('card-selected');

    // $timeout(function() {
    //   $scope.goTo(ev, '/item_details/' + idx);
    //   self.Body.classList.remove('transition-to-details');
    // }, 500);
    this.goTo(ev, '/recipe/' + idx);
  }
}

HomeController.$inject = [
    '$scope', '$window', '$location', '$timeout', '$mdSidenav', '$mdMedia', 'PestoDomUtils', 'RecipeStorage'
];

export default HomeController;
