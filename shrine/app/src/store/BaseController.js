class BaseController {
  constructor($scope, $log, $state, DEBUG_VIEWPORT_MODE) {
    this.$log = $log.getInstance("BaseController");
    this.$log.debug("instanceOf()");

    this.$state = $state;
    this.DEBUG_VIEWPORT_MODE = DEBUG_VIEWPORT_MODE;
  }

}

BaseController.$inject = ['$scope', '$log', '$state', 'DEBUG_VIEWPORT_MODE'];
export default BaseController;
