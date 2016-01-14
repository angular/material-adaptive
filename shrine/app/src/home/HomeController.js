/**
 * Controller for the home page.
 */
class HomeController {
  constructor($scope, $log, ShrineDomUtils) {
    this.$log = $log.getInstance("HomeController");
    this.$log.debug("instanceOf()");

    this.viewport = ShrineDomUtils.getViewport();
    this.viewport.current.updated = () => {
      this.$scope.$apply();
    }
  }  
}

HomeController.$inject = [
    '$scope', '$log', 'ShrineDomUtils',
];

export default HomeController;
