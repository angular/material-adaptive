export default class HomeCtrl {
  constructor($location) {
    this.$location = $location;
    this.roundTrip = 'true';
    this.cities = [
      {display: 'Miami'},
      {display: 'Chicago'},
      {display: 'New York'},
      {display: 'Mexico City'},
      {display: 'San Francisco'},
    ];
  }

  getMatchingCities(query) {
    return this.cities.filter(city =>
      city.display.toLocaleLowerCase().startsWith(query.toLocaleLowerCase()));
  }

  goToSearch() {
    this.$location.path('/search');
    this.$location.search({from: 'miami'});
  }
}
