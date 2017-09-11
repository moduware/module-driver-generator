var gulp = require("gulp");
gulp.task('generate-service-worker', function(callback) {
  var path = require('path');
  var swPrecache = require('sw-precache');

  swPrecache.write('service-worker.js', {
    staticFileGlobs: ['bower_components/**', 'elements/**', '*.{js,json,html}']
  }, callback);
});
