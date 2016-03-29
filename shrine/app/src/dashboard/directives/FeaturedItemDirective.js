import FeaturedItemController from './../controllers/FeaturedItemController'

// Directive definition of the the FeaturedItem.
class FeaturedItemDirective {
  constructor() {
    angular.extend(this, {
      restrict         : 'E',
      scope            : {  item: '=' },
      controller       : ["$scope", 'shrineMQObserver', '$log', FeaturedItemController],
      templateUrl      : 'src/dashboard/tmpl/featuredItem.html'
    });
  }
}

export default FeaturedItemDirective;
