/**
 * Articles DataService
 * Uses embedded, hard-coded data model; acts asynchronously to simulate
 * remote data service call(s).
 *
 * @returns {{loadAll: Function}}
 * @constructor
 */
function ArticlesDataservice($q, $log) {
  var articles = [
        {
          title: 'Tooling Up',
          image: 'tooling_up',
          color: 'rgb(53, 72, 82)',
          rowspan: 2,
          colspan: 2
        }, {
          title: 'Pixate and Form 1.3',
          image: 'pixate',
          color: 'rgb(139, 139, 139)'
        }, {
          title: 'Google Imagery',
          image: 'imagery',
          color: 'rgb(255, 166, 78)'
        }
      ];

    $log = $log.getInstance( "ArticlesDataservice" );
    $log.debug( "instanceOf() ");

    // Promise-based API
    return {
      loadAll : function() {
        $log.debug("loadAll()");

        // Simulate async nature of real remote calls
        return $q.when(articles);
      }
    };
}

export default [ '$q', '$log', ArticlesDataservice ];

