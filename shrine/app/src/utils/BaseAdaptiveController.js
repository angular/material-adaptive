class BaseAdaptiveController {

  constructor($scope, shrineMQObserver, $log ) {
     this._$log = $log;
     this._$scope = $scope;
     this._$shrineMQObserver = shrineMQObserver;
  }

  /**
   * Special callback subscription to the shrineMQObserver
   * which will notify (via callback) this subscriber
   * when the view configuration matches the current media query
   */
  subscribeToAdaptiveChanges(onAdaptiveChange) {
    // Make sure to bind to the correct context...
    let self = this, subscriber = onAdaptiveChange.bind(this);

    this._$shrineMQObserver.subscribe( subscriber );
    this._$scope.$on('$destroy', () => {
      self._$shrineMQObserver.unsubscribe( subscriber );
    });

  }

}


export default BaseAdaptiveController;
