/**
 * Controller for an article on a subject.
 * @constructor
 */
function SubjectController($scope, application, articlesService,
    $routeParams, $log ) {
  $scope.application = application;
  application.reset();

  application.content = 'src/articles/view/subject.html';
  application.rightSideNav = 'src/articles/view/comments.html';
  application.hasListView = false;
  application.hasComments = true;

  var self = this;

  articlesService.get($routeParams.subject).then(article => self.article = article);

  // *********************************
  // Internal methods
  // *********************************
  this.formatDate = function() {
    if (!this.article) return null;
    var locale = 'en-us';
    var date = this.article.date;
    return date.toLocaleString(locale, {month: 'long'}) + ' ' +
        date.getDate() + ', ' + date.getFullYear();
  }
 
  this.flex = function() {
    return application.leftOpen || application.rightOpen ? 80 : 60;
  }

  this.offset = function() {
    return application.leftOpen || application.rightOpen ? 10 : 20;
  }
}

export default ['$scope', 'application', 'articlesService',
    '$routeParams', '$log',
  SubjectController
];

