/**
 * Configure the shrine 'Products' module
 */

import ProductViewerController  from './controllers/ProductViewerController';
import ProductHeaderDirective   from './directives/ProductHeaderDirective';
import ProductDetailsDirective  from './directives/ProductDetailsDirective';
import ProductGridDirective     from './directives/ProductGridDirective';
import ProductCardDirective     from './directives/ProductCardDirective';

export default angular.module('shrine.products', [ ] )
    .controller('ProductViewerController', ProductViewerController)   // no directive... @see RouteConfiguration
    .directive('productHeader'           , () => new ProductHeaderDirective)
    .directive('productDetails'          , () => new ProductDetailsDirective)
    .directive('productGrid'             , () => new ProductGridDirective)
    .directive('productCard'             , () => new ProductCardDirective);
