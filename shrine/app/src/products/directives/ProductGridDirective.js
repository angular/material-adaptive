import ProductGridController from './../controllers/ProductGridController';

// Directive definition of the the ItemCard.
class ProductGridDirective {
    constructor() {
        angular.extend(this, {
          restrict         : 'E',
          scope            : { gridName: '@', showDetails: '@', items: "=" },
          bindToController : true,
          controllerAs     : '$ctrl',
          controller       : ['$scope', 'shrineMQObserver', '$location', '$log', ProductGridController ],
          templateUrl      : 'src/products/tmpl/productGrid.html'
        });
    }
}

export default ProductGridDirective;
