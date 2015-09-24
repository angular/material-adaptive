import HomeCtrl from 'home/home-controller';
import homeTemplate from 'home/home.html!text';
import SearchCtrl from 'search/search-controller';
import searchTemplate from 'search/search.html!text';

export default angular.module('main', [])
    .config(($routeProvider, $mdThemingProvider) => {
        $routeProvider.when('/', {
          template: homeTemplate,
          controller: HomeCtrl,
          controllerAs: 'homeCtrl',
        }).when('/search', {
          template: searchTemplate,
          controller: SearchCtrl,
          controllerAs: 'searchCtrl',
        });
        $mdThemingProvider.definePalette(
            'crane-indigo', $mdThemingProvider.extendPalette('indigo', {
              '500': '#1E5488',
            }));
        $mdThemingProvider.definePalette(
            'crane-yellow', $mdThemingProvider.extendPalette('yellow', {
              'A200': '#F3C50B',
            }));
        $mdThemingProvider.theme('default')
            .primaryPalette('crane-indigo')
            .accentPalette('crane-yellow');
      })
    .run(($mdMedia, $rootScope) => {
      $rootScope.$mdMedia = $mdMedia;
    })
    .name;
