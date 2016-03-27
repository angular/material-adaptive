class AppRoutes {

  static configure($routeProvider) {
    $routeProvider
      .when('/:category?' , { template : '<dashboard></dashboard>' })
      .when('/item/:id'   , { template : '<item-browser></item-browser>' })
      .otherwise({redirectTo: '/'});
  }

}

export default AppRoutes;
