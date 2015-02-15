var gulp           = require('gulp'),
    webserver      = require('gulp-webserver');

var startServer = function(){
  gulp.src('.')
    .pipe(webserver({
      port: 9000,
      livereload: true,
      fallback: 'index.html'
    }));
};

gulp.task('default',
  function() {
    startServer();
  }
);