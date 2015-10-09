// Controller for the sharing menu.
class SharingMenuController {

  constructor(SharingService, $mdBottomSheet) {
    this.$mdBottomSheet = $mdBottomSheet;
    this.sharingOptions = SharingService.sharingOptions;
  }

  /**
   * Hides the sharing menu, resolving the bottomSheet promise with the option selected.
   * @param {string} option The option selected from the sharing menu.
   */
  acknowledgeAction(option) {
    this.$mdBottomSheet.hide(option);
  }
}

export default SharingMenuController;