/**
 * MediaQueryObserver is a centralized observer facade
 * for media query matches to Shrine view configurations.
 *
 * When the mediaQuery changes, the view configuration [associated
 * with the matching mediaQuery] is delivered to each [controller] subscriber
 * via its callback
 *
 */
class MediaQueryObserver {

  /**
   * @constructor
   * @param {!Object} $window
   * @param {!Object} $shrineViewConfigurations
   */
  constructor($shrineViewConfigurations, $rootScope, $window, $log) {
    this._$log = $log.getInstance("MediaQueryObserver");
    this._$window = $window;
    this._$body = this._$window.document.body;
    this._$rootScope = $rootScope;

    this._subscribers = [ ];
    this._configurations = $shrineViewConfigurations;

    // Now build MediaQuery listeners for each viewPort configuration
    // and notify subscribers when the mq match triggers
    this._setViewport(this._defaultViewPort);
    this._attachViewportListeners();
  }

  // ******************************************
  // Public Methods
  // ******************************************

  /**
   * Add subscriber callback function when the viewport
   * configuration changes...
   */
  subscribe (callback) {
    if ( !callback ) return;

    if ( !this._hasSubscriber(callback) ) {
      this._subscribers.push(callback);
    }

    // Issue immediate callback for the current viewport
    callback(this._viewport);
  }

  /**
   * Remove subscriber...
   */
  unsubscribe(callback) {
    if ( this._hasSubscriber(callback) ) {
      this._subscribers.splice( this._subscribers.indexOf(callback), 1);
    }
  }

  // ******************************************
  // Private Methods
  // ******************************************

  /**
   * Assign initial viewPort as the "medium desktop" settings
   */
  get _defaultViewPort() {
    return this._configurations.filter(config => config.viewport == "vp-med")[0];
  }

  /**
   * Has the view subscriber already been registered?
   */
  _hasSubscriber(callback) {
    return !callback  ? false : (this._subscribers.indexOf(callback) > -1);
  }

  /**
   * Notify all subscribers with the current viewPort configuration
   */
  _notifySubscribers() {
    let self = this;
    // After callbacks, trigger all views to update...
    this._$rootScope.$evalAsync(function () {

      self._subscribers.forEach(callback => {
        callback(self._viewport);
      });

    });
  }

  /**
   * Sets viewport object.
   * @param {!Object} viewport
   * @return {Object}
   */
  _setViewport(viewport) {
    Object.assign(this._viewport = { }, viewport);
    this._notifySubscribers();
  }

  /**
   * Updates the viewport object and DOM when Media query has been matched.
   * @param {!Object} mql
   * @param {!Object} w_size
   */
  _handleMQL(mql, viewPort) {
    if (mql.matches) { // Media query does match
      this._$log.debug(`_handleMQL() - mediaQueryChange: '${mql.media}'`);
      this._$log.debug(`_handleMQL() - activate viewPort = '${viewPort.name}'`);

      this._setViewport(viewPort);
      this._updateViewportDOM(viewPort);
    }
  }

  /**
   * Loads the media query viewport listeners.
   * @param {!Object} mql
   * @param {!Object} w_size
  */
  _attachViewportListeners() {
    this._$log.debug(`_attachViewportListeners(): `);

    var ONLY_SCREEN = "only screen",
        buildMQListener = (mediaQueryString, config) => {
          // precapture the viewport configuration information
          // for a specific mql listener...
          return (mql) => this._handleMQL(mql, config);
        },
        hasValuePartial = (data) => {
            var validValue = (key, val) => angular.isDefined(val) ? data[key] != val : true;

            return (key, notEqualValue) => {
              return (data.hasOwnProperty(key) && validValue(key, notEqualValue));
            };
        };

    // For each view configuration
    this._configurations.forEach((vc) => {
      var str = "", hasValue = hasValuePartial(vc);

      if ( hasValue('minHeight', -1) )                      str += ` and (min-height: ${vc.minHeight}px)`;
      if ( hasValue('maxHeight', Number.MAX_SAFE_INTEGER) ) str += ` and (max-height: ${vc.maxHeight}px)`;
      if ( hasValue('minWidth', -1) )                       str += ` and (min-width: ${vc.minWidth}px)`;
      if ( hasValue('maxWidth', Number.MAX_SAFE_INTEGER) )  str += ` and (max-width: ${vc.maxWidth}px)`;
      if ( hasValue('orientation', false))                  str += ` and (orientation: ${vc.orientation})`;

      var media = ONLY_SCREEN + str,
          mqList = this._$window.matchMedia(media),
          onChange = buildMQListener(media, vc);

      mqList.addListener( onChange );
      onChange(mqList);

      this._$log.debug(`mediaQuery = '${media}'`);
    });
  }

  /**
   * Toggles the class of the body that uses the prefix passed as parameter.
   * @param {!String} className
   * @param {!String} prefix
   * @param {!Boolean} addPrefix Adds prefix after toggling the class.
   */
  _toggleBodyClassNameWithPrefix(className, prefix, addPrefix) {
    this._$body.className.split(/\s+/).forEach((cl) => {
      if (cl.indexOf(prefix) === 0) {
        this._$body.classList.remove(cl);
      }
    });

    if (!!addPrefix) {
      className = prefix + className;
    }
    this._$body.classList.add(className);
  }

  /**
   * Updates the viewport dom.
   * @return {Object} Current viewport
   */
  _updateViewportDOM(config) {
    this._toggleBodyClassNameWithPrefix(config.viewport, 'vp-', false);
  }
}

MediaQueryObserver.$inject = ['$shrineViewConfigurations', '$rootScope', '$window', '$log'];

export default MediaQueryObserver;
