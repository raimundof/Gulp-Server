var gulp = require('gulp');
var webserver = require('gulp-webserver');
var puerto=8080; 
var ngrok  = require('ngrok');

gulp.task('webserver', function() {
  gulp.src('public')
    .pipe(webserver({
      livereload: true,
      open: true,
      port: puerto

    }));
    ngrok.connect(puerto,function(error, link){
        if(error!== null)
         {
             console.log('Ha ocurrido un error');
         }
         console.log('La direccion es: '+link);
    })
});