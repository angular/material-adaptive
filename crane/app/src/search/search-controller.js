import seatPicker from 'search/seat-picker.html!text';

export default class SearchCtrl {
  constructor($mdDialog, $location) {
    this.$mdDialog = $mdDialog;

    this.random = Math.random;

    $mdDialog.show($mdDialog.confirm()
            .title('Checking bags?')
            .content(`With Crane Air you can check as many bags as you want so
              long as you pay a nominal fee of $15 USD per bag. Fashion axe Echo
              Park DIY, PBR&B Etsy locavore occupy semiotics tofu authentic
              small batch chia. Polaroid stumptown chia flannel pug. Tilde
              chambray cliche, wolf Vice biodiesel irony. Gluten-free Echo Park
              gentrify flexitarian art party disrupt.`)
            .ok('Agree')
            .cancel('Disagree'))
        .then(() => {}, () => {
          $location.path('/');
        })
  }

  pickSeat() {
    var searchCtrl = this;
    this.$mdDialog.show({
      controller:
          class {constructor() { this.$mdDialog = searchCtrl.$mdDialog; }},
      controllerAs: 'dialogCtrl',
      template: seatPicker,
      clickOutsideToClose: true,
      bindings: {$mdDialog: this.$mdDialog},
    });
  }
}
