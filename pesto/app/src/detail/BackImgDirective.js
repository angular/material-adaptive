const backImgDirective = function() {
  return function(scope, element, attrs) {
    scope.$watch(
        () => attrs.backImg,
        (newBackgroundUrl) => {
          if (newBackgroundUrl) {
            element.css({
              'background-image': 'url(' + newBackgroundUrl +')',
              'background-size' : 'cover'
            });
          }
        });
  }; 
};

export default backImgDirective;
