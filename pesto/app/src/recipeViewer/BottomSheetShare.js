/**
 * Controller for the bottom sheet share.
 */
class BottomSheetShareController {
  /**
   * @constructor
   * @param {!md.$bottomSheet} $mdBottomSheet
   */
  constructor($mdBottomSheet) {
    this._$mdBottomSheet = $mdBottomSheet;
  }

  $onInit() {
    console.log(this.items);
  }

  listItemClick(item) {
    this._$mdBottomSheet.hide(item);
  }
}

export default {
  name : 'bottomSheetShare',
  config : {
    controllerAs: '$ctrl',
    bindings: {  items: '<' },
    controller: [ '$mdBottomSheet', BottomSheetShareController ],
    templateUrl: 'src/recipeViewer/tmpl/bottomSheetShare.html',
  }
};
