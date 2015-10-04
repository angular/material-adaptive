// Notes and Issues:
// https://docs.google.com/document/d/1-XsPsbKO8axU6jiOymB7ixkOF3xD4XoniiTPkPRD7Fw

// Load the custom app ES6 modules

import Application from 'articles/Application'
import ArticlesController from 'articles/ArticlesController'
import SubjectController from 'articles/SubjectController'
import CommentsController from 'articles/CommentsController'
import ArticlesService    from 'articles/ArticlesDataservice'
import CommentsService    from 'articles/CommentsDataservice'
import applicationTemplate   from 'articles/view/application.html!text';

import { ExternalLogger } from 'utils/LogDecorator';

let $log = new ExternalLogger();
    $log = $log.getInstance( "BOOTSTRAP" );
    $log.debug( "Configuring 'articles' module" );

// Define the Angular 'articles' module

let moduleName = angular
      .module( "articles", [ ] )
      .service("articlesService"   , ArticlesService )
      .service("commentsService"   , CommentsService )
      .service("application"       , Application)
      .controller("CommentsController" , CommentsController )
      .config( ($routeProvider) => {
          $routeProvider.when('/', {
            template: applicationTemplate,
            controller: ArticlesController,
            controllerAs: 'actrl',
          })
          .when('/:subject', {
            template: applicationTemplate,
            controller: SubjectController,
            controllerAs: 'sctrl',
          });
      })
      .name;

$log.debug( "Articles module name" + moduleName);

export default moduleName;

