const gulp = require('gulp');
const critical = require('critical');

gulp.task('critical', function() {
  critical.generate({
    base: './',
    src: '_site/index.html',
    css: '_site/css/main.css',
    dest: '_includes/critical.css',
    width: 320,
    height: 480,
    minify: true
  });
});
