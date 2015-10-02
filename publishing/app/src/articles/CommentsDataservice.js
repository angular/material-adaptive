/**
 * Comments DataService
 * Uses embedded, hard-coded data model; acts asynchronously to simulate
 * remote data service call(s).
 *
 * @returns {{loadAll: Function}}
 * @constructor
 */
function CommentsDataservice($q, $log) {
  var comments = [{
          article: 'tooling_up',
          name: 'Trevor Hansen',
          author: 'trevor_hansen',
          date: new Date('15 June 2015 13:00:00'),
          details: 'Wow! There are Amazing.axidermy tote bag Godard Odd Future 90\'s mixtape. Blog tilde seltan, taxidermy drinking vinegard VHS Odd Future unamu +1 skateboard cliche Shoreditch.'
        }, {
          article: 'tooling_up',
          name: 'Sarah Been',
          author: 'sarah_been',
          date: new Date('15 June 2015 15:45:00'),
          details: 'Are these made in photoshop or are they real photographs? Really amazing compositions.'
        }
      ];

    $log = $log.getInstance( "CommentsDataservice" );
    $log.debug( "instanceOf() ");

    // Promise-based API
    return {
      getForArticle : function(article) {
        var result = comments.filter(comment => comment.article == article);
        return $q.when(result);
      },
      addComment: function(comment) {
        comments.push(comment);
        return $q.when();
      }
    };
}

export default [ '$q', '$log', CommentsDataservice ];

