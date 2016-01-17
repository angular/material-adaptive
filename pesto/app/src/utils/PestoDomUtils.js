class PestoDomUtils {
  constructor($window, PESTO_W_SIZES) {
    this.window_ = $window;
    this.W_SIZES = PESTO_W_SIZES;
    this.VW = {};

    $window.addEventListener('resize', () => this.updateViewportDOM());
  }

  getViewport() {
    return this.VW;
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

  updateViewportDOM() {
    this.VW = this.getViewportResolution();
    var _body = this.window_.document.body;
    var bodyCArr = _body.className.split(/\s+/);

    bodyCArr.forEach((cl) => {
      if (cl.indexOf('vp-') === 0) {
        _body.classList.remove(cl);
      }
    });

    _body.classList.add(this.VW.viewport);
    return this.VW;
  }
}

PestoDomUtils.$inject = ['$window', 'PESTO_W_SIZES'];

export default PestoDomUtils;
