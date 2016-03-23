/**
 * Configure the shrine 'Products' module
 */

import StoreProductsController from './controllers/StoreProductsController';
import ProductGridDirective from './directives/ProductGridDirective';
import ProductCardDirective from './directives/ProductCardDirective';

export default angular
    .module('shrine.products', [ ] )
    .controller('StoreProductsController', StoreProductsController)
    .directive('productGrid'             , () => new ProductGridDirective)
    .directive('productCard'             , () => new ProductCardDirective);
