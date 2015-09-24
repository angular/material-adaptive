import HomeCtrl from 'home/home-controller';
import homeTemplate from 'home/home.html!text';

export default angular.module('main', [])
    .config(($routeProvider, $mdThemingProvider) => {
        $routeProvider.when('/', {
          template: homeTemplate,
          controller: HomeCtrl,
          controllerAs: 'homeCtrl',
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
    .name;
