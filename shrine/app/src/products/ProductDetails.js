import BaseAdaptiveController from './../utils/BaseAdaptiveController'

// Controller for the item card.
class ProductDetailsController extends  BaseAdaptiveController {
  /**
   * @constructor
   * @param {!angular.Scope} $scope
   * @param {!Object} shrineMQObserver
   * @param {!Object} shrineItems
   */
  constructor($scope, shrineMQObserver, $log) {
    super($scope, shrineMQObserver, $log.getInstance("ProductDetailsController"));
  }

}

export default {
  name : 'productDetails',
  config : {
    bindings : {  item: '<' },
    controller : ["$scope", "shrineMQObserver", '$log', ProductDetailsController],
    templateUrl : 'src/products/tmpl/productDetails.html'
  }
};

