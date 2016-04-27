const imageOnloadDirective = function($window, $timeout) {
  return {
    restrict: 'A',
    link: function(scope, element) {
      // Animate the card when this element has finished loading.
      element.on('load', function() {
        $timeout(function() {
          let animCard = $window.document.getElementById('animate-card');
          animCard.classList.add('animated', 'slideInUp');
        }, 300);
      });
    }
  }
}

imageOnloadDirective.$inject = ['$window', '$timeout'];

export default imageOnloadDirective;