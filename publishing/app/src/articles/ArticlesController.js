/**
 * Articles list controller
 * @constructor
 */
function ArticlesController($scope, application, articlesService, $log) {
  $scope.application = application;
  application.reset();

  application.content = 'src/articles/view/articles.html';
  application.rightSideNav = 'src/articles/view/article_list.html';
  application.hasListView = true;
  application.hasComments = false;

  var self = this;

  self.articles = [ ];

  // Load all registered articles
  articlesService
      .loadAll()
      .then( function( articles ) {
        self.articles    = [].concat(articles);
      });

  // *********************************
  // Internal methods
  // *********************************
}

export default ['$scope', 'application', 'articlesService', '$log',
  ArticlesController
];

