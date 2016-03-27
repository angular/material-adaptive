import BaseAdaptiveController from './../utils/BaseAdaptiveController'

// Controller for the item card.
class FeaturedItemController extends  BaseAdaptiveController {
  /**
   * @constructor
   * @param {!angular.Scope} $scope
   * @param {!Object} $shrineMQObserver
   * @param {!Object} $shrineItems
   */
  constructor($scope, $shrineMQObserver, $log) {
    super($scope, $shrineMQObserver, $log.getInstance("FeaturedItemController"));
  }

}


export default {
  name : 'featuredItem',
  config : {
    controllerAs: '$ctrl',
    controller : [ '$scope', '$shrineMQObserver', '$log', FeaturedItemController ],
    bindings : {  item : '<' },
    templateUrl : 'src/dashboard/tmpl/featuredItem.html'
  }
};

