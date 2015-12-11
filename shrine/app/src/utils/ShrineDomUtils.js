class ShrineDomUtils {
  constructor($window, SHRINE_W_SIZES) {
    this.window_ = $window;
    this.body_ = this.window_.document.body;
    this.W_SIZES = SHRINE_W_SIZES;
    
    $window.addEventListener('resize', () => this.updateViewportDOM());
  }

  getViewportResolution() {
    var w = this.window_.innerWidth;
    var w_sizes = this.W_SIZES;
    if (w > w_sizes[0].size) {
      return w_sizes[0];
    } else if (w <= w_sizes[w_sizes.length - 1].size) {
      return w_sizes[w_sizes.length - 1];
    } else {
      var f = 0;
      for (var i = 0; i < w_sizes.length - 1; i++) {
        if (w > w_sizes[i+1].size && w < w_sizes[i].size) {
          f = i;
          break;
        }
      }
      return w_sizes[f];
    }
  }

  toggleBodyClassNameWithPrefix(className, prefix) {
    this.body_.className.split(/\s+/).forEach((cl) => {
      if (cl.indexOf(prefix) === 0) {
        this.body_.classList.remove(cl);
      }
    });

    this.body_.classList.add(prefix + className);
  }

  updateViewportDOM() {
    var vpRes = this.getViewportResolution();
    this.toggleBodyClassNameWithPrefix(vpRes.viewport, 'vp-');
    return vpRes;
  }

  updateViewName(viewName) {
    this.toggleBodyClassNameWithPrefix(viewName, 'shrine-view-');
  }
}

ShrineDomUtils.$inject = ['$window', 'SHRINE_W_SIZES'];

export default ShrineDomUtils;
