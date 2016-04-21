import BaseAdaptiveController from './../utils/BaseAdaptiveController'

/**
 * Controller for the home page.
 */
class DashboardController extends  BaseAdaptiveController {
  /**
   * @constructor
   * @param {!angular.Scope} $scope
   * @param {!Object} $window
   * @param {!Object} pestoMQObserver
   * @param {!Object} pestoData
   * @param {!angular.Log} $log
   */
  constructor($scope, $window, pestoMQObserver, pestoData, $log ) {
    super($scope, pestoMQObserver, $log.getInstance("DashboardController"));

    this.$scope = $scope;
    this._$window = $window;
    this._data = pestoData;
    this._$body = document.body;
    this.recipes = [];
  }

  $onInit() {
    this._gatherRecipes();
    this._initEvents();
  }

  // ******************************
  // Private Methods
  // ******************************

  /**
   * Initializes all events.
   */
  _initEvents() {
    // Window onscroll event. Updates the state on the body.
    const scrollListener = () => {
      if (this._$body.scrollTop > 0) {
        this._$body.classList.add('scroll');
      } else {
        this._$body.classList.remove('scroll');
      }
    };

    this._$window.addEventListener('scroll', scrollListener);
    // Remove the listener when route changes.
    this.$scope.$on('$locationChangeStart', () => {
      this._$window.removeEventListener('scroll', scrollListener);
    });
  }


  /**
   * Fetches all recipes.
   */
  _gatherRecipes() {
   this._data
       .getAllRecipes()
       .then(recipes => {
        if (!angular.equals(recipes, this.recipes)) {
          this.recipes = recipes;
        }
       });
  }
}

export default {
  name : 'dashboard',
  config : {
    controllerAs: '$ctrl',
    controller: [ '$scope', '$window', 'pestoMQObserver', 'pestoData', '$log', DashboardController ],
    templateUrl : 'src/dashboard/tmpl/dashboard.html',
  }
};
