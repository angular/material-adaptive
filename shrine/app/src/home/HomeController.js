/**
 * Controller for the home page.
 */
class HomeController {
  /**
   * @constructor
   * @param {!angular.Scope} $scope
   * @param {!angular.Location} $location
   * @param {!angular.routeParams} $routeParams
   * @param {!angular.Log} $log
   * @param {!md.$sidenav} $mdSidenav
   * @param {!md.$media} $mdMedia
   * @param {!Object} ShrineDomUtils
   * @param {!Object} HeroStorage
   */
  constructor($scope, $location, $routeParams, $log, $mdSidenav, $mdMedia,
        ShrineDomUtils, HeroStorage) {
    this.$log = $log.getInstance("HomeController");
    this.$scope = $scope;
    this.$location = $location;
    this.category = $routeParams.category || 0;
    this._$mdSidenav = $mdSidenav;
    this._$mdMedia = $mdMedia;
    this._$body = document.body;

    this.viewport = ShrineDomUtils.getViewport();
    this.viewport.current.updated = () => {
      this.$scope.$apply();
    }
    this._$heroStorage = HeroStorage;
    this.fetchHeros();
  }

  /**
   * Fetches the heros and renders them.
   */
  fetchHeros() {
    this._$heroStorage.getAllHeros().then((heros) => {
      if (!angular.equals(heros, this.heros)) {
        this.heros = heros;
        this.selectCategory(this.category);
      }
    });
  }

  /**
   * Opens sidenav
   */
  openSidenav() {
    this._$body.classList.add('sidenav-open');
    this._$mdSidenav('primary').open();
  }

  /**
   * Hides sidenav
   */
  hideSidenav() {
    this._$body.classList.remove('sidenav-open');
    this._$mdSidenav('primary').close();
  }

  /**
   * Selects the category tab by name of category.
   * @param {!String} name
   */
  selectCategory(name) {
    var idx = this.heros.findIndex((hero) => {
        return hero.category.toLowerCase() === name.toString().toLowerCase();
      });
    if (idx !== -1) {
      this.selectedIndex = idx;
    }
  }

  /**
   * Redirects to the category tab.
   * @param {!event} ev Click event.
   * @param {!String} categoryName
   */
  goToCategory(ev, categoryName) {
    this.$location.path(categoryName.toLowerCase());
    this.hideSidenav();
  }

  /**
   * Returns if the category is the selected one.
   * @param {!String} categoryName
   */
  isCategorySelected(categoryName) {
    var idx = this.heros.findIndex((hero) => {
        return hero.category.toLowerCase() === categoryName.toLowerCase();
      });

    return idx === this.selectedIndex;
  }
}

HomeController.$inject = [
    '$scope', '$location','$routeParams', '$log',  '$mdSidenav', '$mdMedia', 'ShrineDomUtils', 'HeroStorage',
];

export default HomeController;
