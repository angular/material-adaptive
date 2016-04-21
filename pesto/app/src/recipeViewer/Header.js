import BaseAdaptiveController from './../utils/BaseAdaptiveController'


// const menuItems = [
//       { name: 'Tweet recipe', icon: 'https://www.gstatic.com/angular/material-adaptive/pesto/twitter.png', materialIcon: false },
//       { name: 'Email recipe', icon: 'mail', materialIcon: true },
//       { name: 'Message recipe', icon: 'message', materialIcon: true },
//       { name: 'Share on Facebook', icon: 'https://www.gstatic.com/angular/material-adaptive/pesto/facebook.png', materialIcon: false },
//     ];

/**
 * Controller for the recipe viewer header.
 */
class HeaderController extends BaseAdaptiveController {
  /**
   * @constructor
   * @param {!angular.Scope} $scope
   * @param {!angular.Location} $location
   * @param {!angular.routeParams} $routeParams
   * @param {!md.bottomSheet} $mdBottomSheet
   * @param {!Object} pestoMQObserver
   * @param {!Object} pestoData
   * @param {!angular.Log} $log
   */
  constructor($scope, $location, $routeParams, $mdBottomSheet, pestoMQObserver, pestoData, $log ) {
    super($scope, pestoMQObserver, $log.getInstance("RecipeViewerController"));

    this.$scope = $scope;
    this._$location = $location;
    this._$mdBottomSheet = $mdBottomSheet;
    this._data = pestoData;
    this._$body = document.body;
    this.recipeId = $routeParams['id'];

    this.menuItems = [
      { name: 'Tweet recipe', icon: 'https://www.gstatic.com/angular/material-adaptive/pesto/twitter.png', materialIcon: false },
      { name: 'Email recipe', icon: 'mail', materialIcon: true },
      { name: 'Message recipe', icon: 'message', materialIcon: true },
      { name: 'Share on Facebook', icon: 'https://www.gstatic.com/angular/material-adaptive/pesto/facebook.png', materialIcon: false },
    ];
  }

  $onInit() {
    this._listenForAdaptiveChanges();
  }

  /**
   * Opens a different menu according to the current viewport.
   * Menus: Overflow menu / Bottom sheet menu.
   * @param {!md.openMenu} $mdOpenMenu
   * @param {!event} ev Click event.
   */
  openMenu($mdOpenMenu, ev) {
    ev.stopPropagation();

    if (this.isSmallDeviceScreen) {
      let self = this;
      this._$mdBottomSheet.show({
        locals : {
          menuItems : self.menuItems
        },
        controllerAs : "$ctrl",
        bindToController : true,
        controller : function (){ /* empty controller injecting 'locals' */ },
        template: `<bottom-sheet-share items="$ctrl.menuItems"></bottom-sheet-share>`
      });
    } else {
      $mdOpenMenu(ev);
    }
  }

  /**
   * Redirects to the homepage.
   * @param {!event} ev Click event.
   */
  goBack(ev) {
    ev.stopPropagation();
    this._$location.path('/');
  }

  // ******************************
  // Private Methods
  // ******************************

  /**
   * Initializes all events.
   */

  /**
   * Fetches the recipe.
   */
  _gatherRecipe() {
   this._data
      .getRecipe(this.recipeId)
      .then(recipe => {
        if (recipe) {
          this.recipe = recipe;
        }
        else {
          console.log('Bad recipe id: ' + id);
          this._$location.path('/');
        }
    });
  }

  /**
   * Listen for Adaptive changes and update the view
   */
  _listenForAdaptiveChanges() {
   this._$log.debug(`_listenForAdaptiveChanges( )`);

   this.subscribeToAdaptiveChanges((viewPort) => {
     this._$log.debug(`onAdaptiveChange( ${viewPort.viewport} )`);
     this.isSmallDeviceScreen = (viewPort.minWidth <= 480);
   });
  }
}

export default {
  name : 'header',
  config : {
    controllerAs: '$ctrl',
    controller: [ '$scope', '$location', '$routeParams', '$mdBottomSheet', 'pestoMQObserver', 'pestoData', '$log', HeaderController ],
    templateUrl : 'src/recipeViewer/tmpl/header.html',
  }
};
