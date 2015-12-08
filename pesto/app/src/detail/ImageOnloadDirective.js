var imageOnloadDirective = function($window, $timeout) {
  return {
    restrict: 'A',
    link: function(scope, element) {
      // This doesn't actually use element. Should it be applied directly
      // to the element that's animating, rather than calling getElementById?
      element.on('load', function() {
        $timeout(function() {
          var animCard = $window.document.getElementById('animate-card');
          animCard.classList.add('animated', 'slideInUp');
        }, 300);  
      });
    }
  }
}

export default imageOnloadDirective;
