/**
 * Configure the shrine 'Products' module
 */

import ProductViewer  from './ProductViewer';
import ProductGrid    from './ProductGrid';
import ProductHeader  from './ProductHeader';
import ProductCard    from './ProductCard';
import ProductDetails from './ProductDetails';

export default angular
    .module('shrine.products', [ ] )
    .component( ProductViewer.name   , ProductViewer.config )
    .component( ProductHeader.name   , ProductHeader.config )
    .component( ProductDetails.name  , ProductDetails.config )
    .component( ProductGrid.name     , ProductGrid.config )
    .component( ProductCard.name     , ProductCard.config )
