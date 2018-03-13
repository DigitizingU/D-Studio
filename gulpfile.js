(function (){

	// var source = require('vinyl-source-stream');
	// var streamify = require('gulp-streamify');
	// var browserify = require('browserify');

	var gulp = require('gulp');					// using
	var uglify = require('gulp-uglify'); 		// using
	var concat = require('gulp-concat'); 		// using
	var rename = require('gulp-rename'); 		// using
	var sass = require('gulp-sass'); 			// using
	var cleanCss = require('gulp-clean-css');	// using
	// var flatten = require('gulp-flatten');		
	// var del = require('del');					
	var sourcemaps = require('gulp-sourcemaps'); // using
	// var ff = require('node-find-folder');

	var plumber = require('gulp-plumber');		// using
	var eslint = require('gulp-eslint');		// using
	// var htmltidy = require('gulp-htmltidy');	
	// var chtml = require('clean-html');
	// var htmlbeautify = require('gulp-html-beautify');
	// var angularify = require('gulp-angular-htmlify');
	// var html5Lint = require('gulp-html5-lint');
	// var htmllint = require('gulp-htmllint');
	// var csslint = require('gulp-csslint');
	var gutil = require('gulp-util');			// using

	var browserSync = require('browser-sync');	// using

	var postcss = require('gulp-postcss');		// using
	var cssnext = require('postcss-cssnext');	// using



var onError = function(err) {
  gutil.beep();
  console.log(err);
}
 
function swallowError (error) {

  // If you want details of the error in the console
  console.log(error.toString())
  this.emit('end')
}



/***************************************
****************************************
****************************************
****************************************	=tasks below
****************************************
****************************************
***************************************/






// --------------------------------------------------------------------------------------------





	/**********
	********		=js 
	**********/






		/*********

			=General Task for both development and distribution builds
		
		*********/	


	// tasks for concatenating external downloaded resources if we do so 
	gulp.task('vendorJS', function() {
			var sourceFile = gulp.src(['./assets/js/vendor/**/*.js',
									   '!./assets/js/vendor/**/*.min.js']);
	
		    return sourceFile
	    	.pipe(plumber({
				errorHandler: onError
			}))
	        .pipe(uglify())
	        .pipe(rename({suffix: '.min'}))
	        .pipe( gulp.dest( function(file){
				return file.base;
			}) );
		        

		});





		/*********
		
			=Dev Task for development builds
		
		*********/	

		


	// task for concatenating and linting the primary js file 
	gulp.task('js',['vendorJS'],function(){ 
		        return gulp.src(['./assets/js/script.js'])
		        .pipe(plumber({
					errorHandler: onError
				}))
				.pipe(sourcemaps.init())
		        .pipe(concat('script.min.js'))
		        .pipe(eslint())
		        // eslint.format() outputs the lint results to the console. 
		        // Alternatively use eslint.formatEach() (see Docs). 
		        .pipe(eslint.formatEach())
		        // To have the process exit with an error code (1) on 
		        // lint error, return the stream and pipe to failAfterError last. 
		        // .pipe(eslint.failAfterError())
		        .pipe(uglify())
		        .pipe(sourcemaps.write())

		        .pipe(gulp.dest('./assets/js/'))

		        .pipe( browserSync.reload({stream:true}) );
	});


	// task for concatenating, uglifying, linting the primary js file, On file modification (it doesn't run any dependent tasks first)
	gulp.task('js:watch',function(){ 
		        return gulp.src(['./assets/js/script.js'])
		        .pipe(plumber({
					errorHandler: onError
				}))
				.pipe(sourcemaps.init())
		        .pipe(concat('script.min.js'))
		        .pipe(eslint())
		        // eslint.format() outputs the lint results to the console. 
		        // Alternatively use eslint.formatEach() (see Docs). 
		        .pipe(eslint.formatEach())
		        // To have the process exit with an error code (1) on 
		        // lint error, return the stream and pipe to failAfterError last. 
		        // .pipe(eslint.failAfterError())
		        .pipe(uglify())
		        .pipe(sourcemaps.write())

		        .pipe(gulp.dest('./assets/js/'))
		        
		        .pipe( browserSync.reload({stream:true}) );
	});

	






// --------------------------------------------------------------------------------------------








	/**********
	********		=sass and =css
	**********/



	
	/* task for getting compiled css files in the css folder */

	gulp.task('sass', function(){ 
			var postcssPlugins = [
		        cssnext({browsers: ['last 3 version']})
		    ];	

	        return gulp.src(['./assets/css/*.scss','./assets/css/*.sass'])
	        .pipe(plumber({
				errorHandler: onError
			}))
			.pipe(sourcemaps.init())
	        .pipe(sass())
	        .pipe(postcss(postcssPlugins))
	        // .pipe(cleanCss())
	        .on('error', swallowError)
	        .pipe(sourcemaps.write())
	        .pipe(gulp.dest('./assets/css/'))
	        .pipe( browserSync.stream() );

	});


	/**********
	********		=html
	**********/



	
	/* task for getting compiled css files in the css folder */

	gulp.task('html', function(){ 
	        return gulp.src(['./*.html','./*.php',])
	        .pipe(plumber({
				errorHandler: onError
			}))
			
	        .pipe( browserSync.reload({stream:true}) );

	});



// --------------------------------------------------------------------------------------------





	/***********
	********		=watch_serve task
	***********/


	gulp.task('watch_serve', function(){
		browserSync.init({
	        // server: "./"
	        proxy: "localhost:1234/DU-Lite" // change this to your server proxy address
	    });

		gulp.watch(['./assets/js/*.js'],['js:watch']);
		gulp.watch(['./assets/css/**/*.scss',
					'./assets/css/**/*.sass'],['sass']);
		
		gulp.watch(['./*.html','./*.php'],['html']);

	});




	/************
	*******			=watch task
	************/

	gulp.task('watch', function(){

		gulp.watch(['./assets/js/*.js','!./assets/js/*.min.js'],['js']);
		gulp.watch(['./assets/css/**/*.scss',
					'./assets/css/**/*.sass'],['sass']);
		
		gulp.watch(['./*.html','./*.php'],['html']);

	});








// --------------------------------------------------------------------------------------------







	/******
				TASK CHAINS
	******/



	
				//	DEV BUILDS
	

	/* =default task : execute for just getting the final build */
	gulp.task('default', ['js','sass'],function(){
		gulp.start('watch');
	});

	/* =run task : execute for getting a build and proxying to a server while development */
	gulp.task('run', ['js','sass'],function(){
		gulp.start('watch_serve');
	});



}());



/*
commented out from package.json

	// "swiper": "^4.0.7",
    // "jquery": "^3.2.1",
    // "lodash": "^4.17.4",
    // "lodash.debounce": "^4.0.8",
    // "lodash.throttle": "^4.1.1",

*/


