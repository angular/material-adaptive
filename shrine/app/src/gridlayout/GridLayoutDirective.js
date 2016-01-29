// Controller for the grid layout.
class GridLayoutController {
  /**
   * @constructor
   * @param {!angular.Scope} $scope
   * @param {!angular.Location} $location
   * @param {!Object} ShrineDomUtils
   * @param {!Object} ItemStorage
   * @param {!Object} Utils
   */
  constructor($scope, $location, ShrineDomUtils, ItemStorage, Utils) {
    this.$scope = $scope;
    this.$location = $location;
    this.viewport = ShrineDomUtils.getViewport();
    this.viewport.current.updated = () => {
      this.$scope.$apply();
    }
    this._$itemStorage = ItemStorage;
    this.Utils = Utils;
    this.gridInfoView = this.$scope.ctrl.gridName ||
        Object.keys(this.viewport.current.gridInfo)[0];
    this.reshuffle = this.$scope.ctrl.reshuffle || false;

    //Fetches all the items.
    this.fetchItems();
  }

  /**
   * Fetches all the items.
   */
  fetchItems() {
    this._$itemStorage.getAllItems().then((items) => {
      if (!angular.equals(items, this.items)) {
        if (!!this.reshuffle) {
          this.items = this.reshuffleItems(items);
        } else {
          this.items = items;
        }
      }
    });
  }

  /**
   * Reshuffles the order of the items.
   */
  reshuffleItems(items) {
    items = this.Utils.shuffle(items.slice(0, items.length));

    items.forEach(function(item, idx) {
      var mod = idx % 8;
      var _item = Object.assign({}, item);
      _item.featured = (mod === 6 || mod === 7);
      items[idx] = _item;
    }, this);

    return items;
  }

  /**
   * Gets viewport row height.
   */
  getViewportRowHeight() {
    return this.viewport.current.gridInfo[this.gridInfoView].aspectRatio;
  }

  /**
   * Gets viewport columns.
   */
  getViewportColumns() {
    return this.viewport.current.gridInfo[this.gridInfoView].columns;
  }

  /**
   * Gets viewport row height.
   */
  getViewportGutter() {
    return this.viewport.current.gridInfo[this.gridInfoView].gutters;
  }

  /**
   * Gets viewport margin.
   */
  getViewportMargin() {
    return this.viewport.current.gridInfo[this.gridInfoView].margins;
  }

  /**
   * Gets viewport rowspan.
   */
  getViewportRowSpan(idx) {
    var pos = idx %
        this.viewport.current.gridInfo[this.gridInfoView].tileInfo.length;
    return this.viewport.current.gridInfo[this.gridInfoView].tileInfo[pos].rowspan;
  }

  /**
   * Gets viewport colspan.
   */
  getViewportColSpan(idx) {
    var pos = idx %
        this.viewport.current.gridInfo[this.gridInfoView].tileInfo.length;
    return this.viewport.current.gridInfo[this.gridInfoView].tileInfo[pos].colspan;
  }

  /**
   * Redirects to the details page by id of item.
   * @param {!event} ev Click event.
   * @param {!String} idItem
   */
  goToDetails(ev, idItem) {
    ev.stopPropagation();
    this.$location.path('/item/'+ idItem);
  }
}

// Directive definition of the the ItemCard.
class GridLayoutDirective {
    constructor() {
        angular.extend(this, {
          restrict         : 'E',
          scope            : { gridName: '=', showDetails: '=', reshuffle: '=' },
          bindToController : true,
          controllerAs     : 'ctrl',
          controller       : ["$scope", "$location", "ShrineDomUtils", "ItemStorage", "Utils", GridLayoutController],
          templateUrl      : 'src/gridlayout/view/gridlayout.html'
        });
    }
}

GridLayoutDirective.$inject = ['$scope', '$location', 'ShrineDomUtils', 'ItemStorage', 'Utils'];
export default GridLayoutDirective;
