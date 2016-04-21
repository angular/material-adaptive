/**
 * Configure the pesto 'RecipeDetails' module
 * Register the recipe details component and its child components
 */

import RecipeViewer           from './RecipeViewer';
import Header                 from './Header';
import RecipeCard             from './RecipeCard';
import BottomSheetShare       from './BottomSheetShare';
import BackgroundImg          from './BackgroundImg';
import imageOnloadDirective   from './directives/imageonload';

export default angular.module('pesto.recipeViewer', [ ] )
    .component( RecipeViewer.name    , RecipeViewer.config )
    .component( Header.name    , Header.config )
    .component( RecipeCard.name    , RecipeCard.config )
    .component( BottomSheetShare.name, BottomSheetShare.config )
    .directive( 'imageonload', imageOnloadDirective )
    .component( BackgroundImg.name, BackgroundImg.config );

