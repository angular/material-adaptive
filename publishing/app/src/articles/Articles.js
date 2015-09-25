// Notes and Issues:
// https://docs.google.com/document/d/1-XsPsbKO8axU6jiOymB7ixkOF3xD4XoniiTPkPRD7Fw

// Load the custom app ES6 modules

import ArticlesController from 'articles/ArticlesController'
import SubjectController from 'articles/SubjectController'
import ArticlesService    from 'articles/ArticlesDataservice'
import articlesTemplate   from 'articles/view/browseArticles.html!text';
import subjectTemplate   from 'articles/view/subject.html!text';

import { ExternalLogger } from 'utils/LogDecorator';

let $log = new ExternalLogger();
    $log = $log.getInstance( "BOOTSTRAP" );
    $log.debug( "Configuring 'articles' module" );

// Define the Angular 'articles' module

let moduleName = angular
      .module( "articles", [ ] )
      .service("articlesService"       , ArticlesService )
      .controller("ArticlesController" , ArticlesController )
      .config( ($routeProvider) => {
          $routeProvider.when('/', {
            template: articlesTemplate,
            controller: ArticlesController,
            controllerAs: 'actrl',
          })
          .when('/:subject', {
            template: subjectTemplate,
            controller: SubjectController,
            controllerAs: 'sctrl',
          });
      })
      .name;

$log.debug( "Articles module name" + moduleName);

export default moduleName;

