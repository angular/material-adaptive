import ProductCardController from './../controllers/ProductCardController'

// Directive definition of the the ProductCard.
class ProductCardDirective {
  constructor() {
    angular.extend(this, {
      restrict         : 'E',
      scope            : {  item: '=', showDetails: '@' },
      bindToController : true,
      controllerAs     : '$ctrl',
      controller       : ["$scope", "shrineMQObserver", '$log', ProductCardController],
      templateUrl      : 'src/products/tmpl/productCard.html'
    });
  }
}

export default ProductCardDirective;
