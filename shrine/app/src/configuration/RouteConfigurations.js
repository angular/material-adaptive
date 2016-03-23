class AppRoutes {

  static configure($routeProvider) {
    $routeProvider
      .when('/:category?', {
        templateUrl: 'src/dashboard/tmpl/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'home'
      })
      .when('/item/:id', {
        templateUrl: 'src/products/tmpl/storeDetails.html',
        controller: 'StoreProductsController',
        controllerAs: 'detail'
      })
      .otherwise({redirectTo: '/'});
  }
}

export default AppRoutes;
