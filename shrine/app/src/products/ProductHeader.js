import BaseAdaptiveController from './../utils/BaseAdaptiveController'

const URL_MOBILE_SHRINE = 'https://www.gstatic.com/angular/material-adaptive/shrine/shrine_logo.svg';
const URL_SHRINE = 'https://www.gstatic.com/angular/material-adaptive/shrine/shrine_logo.svg';

// Controller for the item card.
class ProductHeaderController extends  BaseAdaptiveController {
  /**
   * @constructor
   * @param {!angular.Scope} $scope
   * @param {!Object} $shrineMQObserver
   * @param {!Object} $shrineItems
   */
  constructor($scope, $shrineMQObserver, $log) {
    super($scope, $shrineMQObserver, $log.getInstance("ProductHeaderController"));
  }

  $onInit() {
    this.logoURL = this.isMobile ? URL_MOBILE_SHRINE : URL_SHRINE;
  }

}

export default {
  name : 'productHeader',
  config : {
    bindings : {  title: '@', isMobile:'<' },
    controller : ["$scope", "$shrineMQObserver", '$log', ProductHeaderController],
    templateUrl : 'src/products/tmpl/productHeader.html'
  }
};

