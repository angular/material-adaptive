/**
 * A service that contains global application settings.
 *
 * @constructor
 */
function Application($mdMedia, $mdBottomSheet, $location) {
  this.menuItems = ['Art', 'Film', 'Photography', 'Design', 'Top Ten',
      'A Day in the Life', 'Projects', 'Studio Visits', 'Misc', 'Contact'];

  this.leftOpen = false;
  this.rightOpen = false;
  this.hasListView = true;
  this.goBack = null;

  this.reset = function() {
    this.leftOpen = false;
    this.rightOpen = false;
    this.rightSideNav = undefined;
    this.goBack = null;
  }

  this.fabPosition = function() {
    if(!$mdMedia('sm') && (this.leftOpen || this.rightOpen)) return 'content';
    else if(!$mdMedia('sm') && !(this.leftOpen || this.rightOpen)) return 'top';
    else return 'bottom';
  }

  this.sm = function() {
    return $mdMedia('sm');
  }

  this.openMenu = function(menuItem) {
    $location.url('/category/' + menuItem.replace(/ /g, '_'));
    this.leftOpen = false;
  };

  this.openBottomSheet = function(event) {
    $mdBottomSheet.show({
      templateUrl: 'src/articles/view/fab-bottom.html',
      targetEvent: event
    });
  }
}

export default [ '$mdMedia', '$mdBottomSheet', '$location', Application ];

