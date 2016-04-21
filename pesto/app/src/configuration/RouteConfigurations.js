class AppRoutes {

  static configure($routeProvider) {
    $routeProvider
      .when('/'   , { template : '<dashboard></dashboard>' })
      .when('/settings'   , { template : '<settings></settings>' })
      .when('/recipe/:id'  , { template : '<recipe-viewer></recipe-viewer>' })
      .otherwise( { redirectTo: '/' } );
  }

}

export default AppRoutes;