export default class HomeCtrl {
  constructor($location) {
    this.$location = $location;
    this.roundTrip = 'true';
    this.cities = [
      {display: 'Miami', image: 'miami.jpg'},
      {display: 'Tokyo', image: 'tokyo.jpg'},
      {display: 'New York', image: 'new-york-night.jpg'},
      {display: 'Perth', image: 'perth.jpg'},
      {display: 'San Francisco', image: 'san-francisco.jpg'},
      {display: 'Seattle', image: 'seattle.jpg'},
    ];
  }

  getMatchingCities(query) {
    return this.cities.filter(
        city => city.display.toLocaleLowerCase().startsWith(
            query.toLocaleLowerCase()));
  }

  goToSearch() {
    this.$location.path('/search');
    this.$location.search({from: 'miami'});
  }
}
