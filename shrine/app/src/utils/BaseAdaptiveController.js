class BaseAdaptiveController {

  constructor($scope, $shrineMQObserver, $log ) {
     this._$log = $log;
     this._$shrineMQObserver = $shrineMQObserver;
  }


  $onInit() {
    this._$log.debug(`_listenForAdaptiveChanges( )`);
    this.subscribeToAdaptiveChanges((viewPort) => {
      // Do nothing for now...
    });
  }

  $onDestroy() {
    this._$shrineMQObserver.unsubscribe( this._watcher );
  }

  /**
   * Special callback subscription to the $shrineMQObserver
   * which will notify (via callback) this subscriber
   * when the view configuration matches the current media query
   */
  subscribeToAdaptiveChanges(onAdaptiveChange) {
    // Make sure to bind to the correct context...
    let subscriber = onAdaptiveChange.bind(this);
    this._$shrineMQObserver.subscribe( this._watcher = subscriber );
  }

}


export default BaseAdaptiveController;
