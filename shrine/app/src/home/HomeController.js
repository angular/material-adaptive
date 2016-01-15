/**
 * Controller for the home page.
 */
class HomeController {
  constructor($scope, $location, $routeParams, $log, $mdSidenav, $mdMedia, ShrineDomUtils, HeroStorage) {
    this.$log = $log.getInstance("HomeController");
    this.$log.debug("instanceOf()");
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

  selectCategory(name) {
    var idx = this.heros.findIndex((hero) => {
        return hero.category.toLowerCase() === name.toString().toLowerCase();
      });
    if (idx !== -1) {
      this.selectedIndex = idx;
    }
  }

  goToCategory(ev, categoryName) {
    this.$location.path(categoryName.toLowerCase());
    this.hideSidenav();
  }

  fetchHeros() {
    this._$heroStorage.getAllHeros().then((heros) => {
      if (!angular.equals(heros, this.heros)) {
        this.heros = heros;
        this.selectCategory(this.category);
      }
    });
  }

  isCategorySelected(categoryName) {
    var idx = this.heros.findIndex((hero) => {
        return hero.category.toLowerCase() === categoryName.toLowerCase();
      });

    return idx === this.selectedIndex;
  }

  openSidenav() {
    this._$body.classList.add('sidenav-open');
    this._$mdSidenav('primary').open();
  }

  hideSidenav() {
    this._$body.classList.remove('sidenav-open');
    this._$mdSidenav('primary').close();
  }
}

HomeController.$inject = [
    '$scope', '$location','$routeParams', '$log',  '$mdSidenav', '$mdMedia', 'ShrineDomUtils', 'HeroStorage',
];

export default HomeController;
