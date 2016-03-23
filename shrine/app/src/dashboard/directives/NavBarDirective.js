// Directive definition of the the NavBar.
class NavBarDirective {
  constructor() {
    angular.extend(this, {
      restrict         : 'E',
      replace          : true, 
      templateUrl      : 'src/dashboard/tmpl/navBar.html'
    });
  }
}

export default NavBarDirective;
