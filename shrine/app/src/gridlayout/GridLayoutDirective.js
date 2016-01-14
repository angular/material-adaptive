// Controller for the grid layout.
class GridLayoutController {

  constructor($scope, $location, ShrineDomUtils, ItemStorage) {
    this.$scope = $scope;
    this.$location = $location;
    this.viewport = ShrineDomUtils.getViewport();
    this.viewport.current.updated = () => {
      this.$scope.$apply();
    }
    this._$itemStorage = ItemStorage;
    this.fetchItems();
    this.gridInfoView = this.$scope.ctrl.gridName || 
        Object.keys(this.viewport.current.gridInfo)[0];
  }

  fetchItems() {
    this._$itemStorage.getAllItems().then((items) => {
      if (!angular.equals(items, this.items)) {
        this.items = items;
      }
    });
  }

  getViewportRowHeight() {
    return this.viewport.current.gridInfo[this.gridInfoView].aspectRatio;
  }

  getViewportColumns() {
    return this.viewport.current.gridInfo[this.gridInfoView].columns;
  }

  getViewportGutter() {
    return this.viewport.current.gridInfo[this.gridInfoView].gutters;
  }

  getViewportMargin() {
    return this.viewport.current.gridInfo[this.gridInfoView].margins;
  }

  getViewportRowSpan(idx) {
    var pos = idx % 
        this.viewport.current.gridInfo[this.gridInfoView].tileInfo.length;
    return this.viewport.current.gridInfo[this.gridInfoView].tileInfo[pos].rowspan;
  }

  getViewportColSpan(idx) {
    var pos = idx % 
        this.viewport.current.gridInfo[this.gridInfoView].tileInfo.length;
    return this.viewport.current.gridInfo[this.gridInfoView].tileInfo[pos].colspan;
  }

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
          scope            : { gridName: '=', showDetails: '=' },
          bindToController : true,
          controllerAs     : 'ctrl',
          controller       : GridLayoutController,
          templateUrl      : 'src/gridlayout/view/gridlayout.html'
        });
    }  
}

GridLayoutDirective.$inject = ['$scope', '$location', 'ShrineDomUtils', 
    'ItemStorage'];
export default GridLayoutDirective;
