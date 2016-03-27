class AppRoutes {

  static configure($routeProvider) {
    $routeProvider
      .when('/:category?'   , { template : '<dashboard></dashboard>' })
      .when('/product/:id'  , { template : '<product-viewer></product-viewer>' })
      .otherwise( { redirectTo: '/feature' } );
  }

}

export default AppRoutes;
