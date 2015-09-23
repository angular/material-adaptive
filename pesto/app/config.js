System.config({
  defaultJSExtensions: true,
  transpiler: "traceur",
  paths: {
    "utils/*": "src/utils/*.js",
    "app/*": "src/*.js",
    "home/*": "src/home/*.js",
    "model/*": "src/model/*.js",
    "settings/*": "src/settings/*.js",
    "store/*": "src/store/*.js",
    "material-start/*": "src/*.js",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "angular": "github:angular/bower-angular@1.4.6",
    "angular-animate": "github:angular/bower-angular-route@1.4.6",
    "angular-aria": "github:angular/bower-angular-aria@1.4.6",
    "angular-material": "github:angular/bower-material@master",
    "angular-route": "github:angular/bower-angular-route@1.4.6",
    "css": "github:systemjs/plugin-css@0.1.16",
    "json": "github:systemjs/plugin-json@0.1.0",
    "text": "github:systemjs/plugin-text@0.0.2",
    "traceur": "github:jmcriffey/bower-traceur@0.0.90",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.90",
    "github:angular/bower-angular-animate@1.4.6": {
      "angular": "github:angular/bower-angular@1.4.6"
    },
    "github:angular/bower-angular-aria@1.4.6": {
      "angular": "github:angular/bower-angular@1.4.6"
    },
    "github:angular/bower-angular-route@1.4.6": {
      "angular": "github:angular/bower-angular@1.4.6"
    },
    "github:angular/bower-material@master": {
      "angular": "github:angular/bower-angular@1.4.6",
      "angular-animate": "github:angular/bower-angular-animate@1.4.6",
      "angular-aria": "github:angular/bower-angular-aria@1.4.6",
      "css": "github:systemjs/plugin-css@0.1.16"
    }
  }
});
