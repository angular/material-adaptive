class BaseAdaptiveController {

  constructor($scope, pestoMQObserver, $log ) {
     this._$log = $log;
     this._pestoMQObserver = pestoMQObserver;
  }

  $onInit() {
    this._$log.debug(`_listenForAdaptiveChanges( )`);
    this.subscribeToAdaptiveChanges((viewPort) => {
      // Do nothing for now...
    });
  }

  $onDestroy() {
    this._pestoMQObserver.unsubscribe( this._watcher );
  }

  /**
   * Special callback subscription to the pestoMQObserver
   * which will notify (via callback) this subscriber
   * when the view configuration matches the current media query
   */
  subscribeToAdaptiveChanges(onAdaptiveChange) {
    // Make sure to bind to the correct context...
    let subscriber = onAdaptiveChange.bind(this);
    this._pestoMQObserver.subscribe( this._watcher = subscriber );
  }

}


export default BaseAdaptiveController;
