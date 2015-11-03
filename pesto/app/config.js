System.config({
  defaultJSExtensions: true,
  transpiler: "traceur",
  paths: {
    "utils/*": "src/utils/*.js",
    "app/*": "src/*.js",
    "detail/*": "src/detail/*.js",
    "home/*": "src/home/*.js",
    "model/*": "src/model/*.js",
    "settings/*": "src/settings/*.js",
    "store/*": "src/store/*.js",
    "material-start/*": "src/*.js",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "angular": "github:angular/bower-angular@1.4.7",
    "angular-animate": "github:angular/bower-angular-animate@1.4.7",
    "angular-aria": "github:angular/bower-angular-aria@1.4.7",
    "angular-material": "github:angular/bower-material@master",
    "angular-route": "github:angular/bower-angular-route@1.4.7",
    "css": "github:systemjs/plugin-css@0.1.19",
    "json": "github:systemjs/plugin-json@0.1.0",
    "text": "github:systemjs/plugin-text@0.0.2",
    "traceur": "github:jmcriffey/bower-traceur@0.0.90",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.90",
    "github:angular/bower-angular-animate@1.4.7": {
      "angular": "github:angular/bower-angular@1.4.7"
    },
    "github:angular/bower-angular-aria@1.4.7": {
      "angular": "github:angular/bower-angular@1.4.7"
    },
    "github:angular/bower-angular-route@1.4.7": {
      "angular": "github:angular/bower-angular@1.4.7"
    },
    "github:angular/bower-material@master": {
      "angular": "npm:angular@1.4.7",
      "angular-animate": "npm:angular-animate@1.4.7",
      "angular-aria": "npm:angular-aria@1.4.7",
      "css": "github:systemjs/plugin-css@0.1.19"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:angular-animate@1.4.7": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:angular@1.4.7": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
