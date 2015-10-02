/**
 * Controller for comments on a subject.
 * @constructor
 */
function CommentsController(commentsService, $routeParams, $log ) {
  var self = this;
 
  commentsService.getForArticle($routeParams.subject).then(comments => self.comments = comments);

  this.formatDate = function(date) {
    if (!date) return null;
    var locale = 'en-us';
    var month = date.toLocaleString(locale, {month: 'long'});
    var day = date.getDate();
    var hours = date.getHours();
    var pm = true;
    if (hours > 12) {
      hours = hours - 12;
      pm = false;
    }
    var minutes = date.getMinutes();
    var d2 = function(n) {
      return n < 10 ? '0' + n : n;
    }
    return month + ' ' + d2(day) + ', ' + d2(hours) + ':' + d2(minutes) + (pm? 'pm': 'am');
  }

  this.addComment = function() {
    var comment = {
      article: $routeParams.subject,
      name: 'You',
      author: 'current_user',
      date: new Date(),
      details: this.newComment || ''
    };
    commentsService.addComment(comment).then(function() {
      self.comments.push(comment);
      self.newComment = '';
    });
  }
}

export default ['commentsService', '$routeParams', '$log',
  CommentsController
];

