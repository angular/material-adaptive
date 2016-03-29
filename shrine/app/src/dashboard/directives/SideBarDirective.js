import SideBarController from './../controllers/SideBarController';

// Directive definition of the the NavBar.
class SideBarDirective {
  constructor() {
    angular.extend(this, {
      restrict         : 'E',
      scope            : {  categories: '=', selected : "=?" },
      bindToController : true,
      controllerAs     : 'ctrl',
      controller       : ["$scope", 'shrineMQObserver', '$location', '$log', SideBarController],
      templateUrl      : 'src/dashboard/tmpl/sideBar.html'
    });
  }
}

export default SideBarDirective;
