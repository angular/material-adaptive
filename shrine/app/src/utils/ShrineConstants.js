let moduleName = angular.module('shrine.constants', [])
    .constant('SHRINE_VERSION_API', 'v1')
    .constant('DEBUG_VIEWPORT_MODE', true)
    .constant('SHRINE_W_SIZES', [{
    		maxWidth: -1,
            minWidth: 1600,
    		viewport: "vp-xxlg"
    	}, {
    		maxWidth: 1599,
            minWidth: 1440,
    		viewport: "vp-xlg"
    	}, {
            maxWidth: 1439,
            minWidth: 1280,
            viewport: "vp-lg"
        }, {
            maxWidth: 1023,
            minWidth: 960,
            viewport: "vp-med"
        }, {
            maxWidth: 959,
            minWidth: 840,
            viewport: "vp-sm"
        }, {
            maxWidth: 719,
            minWidth: 600,
            viewport: "vp-xsm"
        }, {
            maxWidth: 599,
            minWidth: 480,
            viewport: "vp-xs"
        }, {
            maxWidth: 1279,
            minWidth: 1024,
            viewport: "vp-tablet-land"
        }, {
            maxWidth: 839,
            minWidth: 720,
            viewport: "vp-tablet-port"
        }, {
            maxWidth: 600,
            minWidth: 0,
            viewport: "vp-mobile-land"
        }, {
            maxWidth: 360,
            minWidth: -1,
            viewport: "vp-mobile-port"
        }])
    .name;

export default moduleName;
