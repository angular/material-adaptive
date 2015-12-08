class BottomSheetShareController {
  constructor($mdBottomSheet, items) {
    this.items = items;
    this.mdBottomSheet_ = $mdBottomSheet;
  }

  listItemClick(item) {
    this.mdBottomSheet_.hide(item);
  }
}

BottomSheetShareController.$inject = ['$mdBottomSheet', 'items'];

export default BottomSheetShareController;
