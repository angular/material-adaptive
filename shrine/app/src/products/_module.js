/**
 * Configure the shrine 'Products' module
 */

import ItemBrowser from './ItemBrowser';
import ProductGrid from './ProductGrid';
import ProductCard from './ProductCard';

export default angular
    .module('shrine.products', [ ] )
    .component( ItemBrowser.name  , ItemBrowser.config )
    .component( ProductGrid.name  , ProductGrid.config )
    .component( ProductCard.name  , ProductCard.config )
