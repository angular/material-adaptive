import ProductDetailsController from '../controllers/ProductDetailsController'

// Directive definition of the the ProductCard.
class ProductDetailsDirective {
  constructor() {
    angular.extend(this, {
      restrict         : 'E',
      scope            : {  item: '=' },
      bindToController : true,
      controllerAs     : '$ctrl',
      controller       : ["$scope", "shrineMQObserver", '$log', ProductDetailsController],
      templateUrl      : 'src/products/tmpl/productDetails.html'
    });
  }
}

export default ProductDetailsDirective;
