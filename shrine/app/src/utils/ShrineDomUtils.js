class ShrineDomUtils {
  /**
   * @constructor
   * @param {!Object} $window
   * @param {!Object} SHRINE_ADAPTIVE_DATA
   */
  constructor($window, SHRINE_ADAPTIVE_DATA) {
    this._$window = $window;
    this._$body = this._$window.document.body;
    this._$viewport = {
      current: {
        'updated': () => {}
      }
    };
    this.WinSizes = SHRINE_ADAPTIVE_DATA;
    this.loadViewportListeners();
  }

  /**
   * Returns viewport object.
   * @return {Object}
   */
  getViewport() {
    return this._$viewport;
  }

  /**
   * Sets viewport object.
   * @param {!Object} viewport
   * @return {Object}
   */
  setViewport(viewport) {
    this._$viewport.current = Object.assign(this._$viewport.current, viewport);
    this._$viewport.current.updated();
  }

  /**
   * Updates the viewport object and DOM when Media query has been matched.
   * @param {!Object} mql
   * @param {!Object} w_size
   */
  handleMQL(mql, w_size) {
    if (mql.matches) { // Media query does match
      this.setViewport(w_size);
      this.updateViewportDOM();
    }
  }

  /**
   * Loads the media query viewport listeners.
   * @param {!Object} mql
   * @param {!Object} w_size
   */
  loadViewportListeners() {
    var prefix_media = "only screen";
    this.WinSizes.forEach((w_size) => {
      var str = "";

      if (w_size.hasOwnProperty('minHeight') && w_size.minHeight != -1) {
        str += " and (min-height: " + w_size.minHeight + "px)";
      }

      if (w_size.hasOwnProperty('maxHeight') &&
          w_size.maxHeight != Number.MAX_SAFE_INTEGER) {
        str += " and (max-height: " + w_size.maxHeight + "px)";
      }


      if (w_size.hasOwnProperty('minWidth') && w_size.minWidth != -1) {
        str += " and (min-width: " + w_size.minWidth + "px)";
      }

      if (w_size.hasOwnProperty('maxWidth') &&
          w_size.maxWidth != Number.MAX_SAFE_INTEGER) {
        str += " and (max-width: " + w_size.maxWidth + "px)";
      }

      if (w_size.hasOwnProperty('orientation') && !!w_size.orientation) {
        str += " and (orientation: " + w_size.orientation + ")";
      }

      var strMedia = prefix_media + str;
      var mql = window.matchMedia(strMedia),
          handleMQL = (mql) => this.handleMQL(mql, w_size);
      handleMQL(mql, w_size.viewport);
      mql.addListener(handleMQL);
    });
  }

  /**
   * Toggles the class of the body that uses the prefix passed as parameter.
   * @param {!String} className
   * @param {!String} prefix
   * @param {!Boolean} addPrefix Adds prefix after toggling the class.
   */
  toggleBodyClassNameWithPrefix(className, prefix, addPrefix) {
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
  updateViewportDOM() {
    var vpRes = this._$viewport.current;
    this.toggleBodyClassNameWithPrefix(vpRes.viewport, 'vp-', false);
    return vpRes;
  }
}

ShrineDomUtils.$inject = ['$window', 'SHRINE_ADAPTIVE_DATA'];

export default ShrineDomUtils;
