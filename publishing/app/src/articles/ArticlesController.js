/**
 * Articles list controller
 * @constructor
 */
function ArticlesController($scope, application, articlesService, $routeParams, $log) {
  $scope.application = application;
  application.reset();

  application.content = 'src/articles/view/articles.html';
  application.rightSideNav = 'src/articles/view/article_list.html';
  application.hasListView = true;
  application.hasComments = false;

  var self = this;

  self.articles = [ ];

  // Load all registered articles
  var articlesPromise;
  if ($routeParams.author) {
    articlesPromise = articlesService.loadByAuthor($routeParams.author);
  } else if ($routeParams.category) {
    var category = $routeParams.category.replace(/_/g, ' ');;
    articlesPromise = articlesService.loadByCategory(category);
  } else {
    articlesPromise = articlesService.loadAll();
  }
  articlesPromise.then( function( articles ) {
        self.articles    = [].concat(articles);
      });

  // *********************************
  // Internal methods
  // *********************************
}

export default ['$scope', 'application', 'articlesService', '$routeParams', '$log',
  ArticlesController
];

