class AppRoutes {

  /**
   * Current application uses full-page navigation and only has two
   * primary views:  Dashboard and ProductViewer
   */
  static configure($routeProvider) {
    $routeProvider
      .when('/:category?', {
        templateUrl: 'src/dashboard/tmpl/dashboard.html',
        controller: 'LandingPageController',
        controllerAs: '$ctrl'
      })
      .when('/product/:id', {
        templateUrl: 'src/products/tmpl/productViewer.html',
        controller: 'ProductViewerController',
        controllerAs: 'viewer'
      })
      .otherwise({redirectTo: '/'});
  }
}

export default AppRoutes;
