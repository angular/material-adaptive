let moduleName = angular.module('shrine.constants', [])
    .constant('SHRINE_VERSION_API', 'v1')
    .constant('DEBUG_VIEWPORT_MODE', true)
    .constant('SHRINE_W_SIZES', [{
    		size: 1280,
    		viewport: "vp-desktop-large"
    	}, {
    		size: 1024,
    		viewport: "vp-mobile-large-land"
    	}, {
    		size: 960,
    		viewport: "vp-desktop-m-large"
    	}, {
    		size: 840,
    		viewport: "vp-desktop-medium"
    	}, {
    		size: 720,
    		viewport: "vp-mobile-large"
    	}, {
    		size: 600,
    		viewport: "vp-mobile-small-landscape"
    	}, {
    		size: 480,
    		viewport: "vp-desktop-small"
    	}, {
    		size: 360,
    		viewport: "vp-mobile-small"
    	}])
    .name;

export default moduleName;
