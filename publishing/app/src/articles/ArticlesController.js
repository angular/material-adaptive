/**
 * Main App Controller for the Angular Material Publish Demo App
 * @constructor
 */
function ArticlesController( articlesService, $log ) {

  $log = $log.getInstance( "SessionController" );
  $log.debug( "instanceOf() ");

  this.menuItems = ['Art', 'Film', 'Photography', 'Design', 'Top Ten',
      'A Day in the Life', 'Projects', 'Studio Visits', 'Misc', 'Contact'];

  var self = this;

  self.articles     = [ ];

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

export default [
    'articlesService', '$log',
    ArticlesController
  ];

