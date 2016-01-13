class ShrineDomUtils {
  constructor($window, SHRINE_W_SIZES) {
    this.window_ = $window;
    this.body_ = this.window_.document.body;
    this.W_SIZES = SHRINE_W_SIZES;
    this.currentViewport = {};
    this.loadViewportListeners();
  }

  getCurrentViewport() {
    return this.currentViewport;
  }

  handleMQL(mql, w_size) {
    if (mql.matches) {
      // Media query does match
      this.currentViewport = w_size;
      this.updateViewportDOM();
    } else { 
      // Media query does not match anymore
    }
  }

  loadViewportListeners() {
    var prefix_media = "only screen";
    this.W_SIZES.forEach((w_size) => {
      var str = "";

      if (w_size.minWidth != -1) {
        str += " and (min-width: " + w_size.minWidth + "px)";
      }

      if (w_size.maxWidth != -1) {
        str += " and (max-width: " + w_size.maxWidth + "px)";
      }

      if (!!w_size.orientation) {
        str += " and (orientation: " + w_size.orientation + ")";
      }

      var strMedia = prefix_media + str;
      var mql = window.matchMedia(strMedia), handleMQL = (mql) => this.handleMQL(mql, w_size);
      handleMQL(mql, w_size.viewport);
      mql.addListener(handleMQL);
    });      
  }

  toggleBodyClassNameWithPrefix(className, prefix, addPrefix) {
    this.body_.className.split(/\s+/).forEach((cl) => {
      if (cl.indexOf(prefix) === 0) {
        this.body_.classList.remove(cl);
      }
    });

    if (!!addPrefix) {
      className = prefix + className;
    }

    this.body_.classList.add(className);
  }

  updateViewportDOM() {
    var vpRes = this.currentViewport;
    this.toggleBodyClassNameWithPrefix(vpRes.viewport, 'vp-', false);
    return vpRes;
  }

  updateViewName(viewName) {
    this.toggleBodyClassNameWithPrefix(viewName, 'shrine-view-', true);
  }
}

ShrineDomUtils.$inject = ['$window', 'SHRINE_W_SIZES'];

export default ShrineDomUtils;
