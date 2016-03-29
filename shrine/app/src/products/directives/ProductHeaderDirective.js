import ProductHeaderController from './../controllers/ProductHeaderController'

// Directive definition of the the ProductCard.
class ProductHeaderDirective {
  constructor() {
    angular.extend(this, {
      restrict         : 'E',
      scope            : {  item: '=', isMobile: '@' },
      bindToController : true,
      controllerAs     : '$ctrl',
      controller       : ["$scope", "shrineMQObserver", '$location', '$log', ProductHeaderController],
      templateUrl      : 'src/products/tmpl/productHeader.html'
    });
  }
}

export default ProductHeaderDirective;
