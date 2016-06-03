'use strict';

/** 
 *  @author	Thiago Delgado Pinto
 */
  
var gulp	= require( 'gulp' );
var uglify	= require( 'gulp-uglify' );
var rename	= require( 'gulp-rename' );
var jshint	= require( 'gulp-jshint' );
var stylish	= require( 'jshint-stylish' );

var fromDir	= '';
var toDir	= '';

gulp.task( 'js', function() {
	
	return gulp.src( [ '*.js', '!gulpfile.js', '!*.min.js' ] )
		.pipe( jshint() )
		.pipe( jshint.reporter( stylish ) )
		.pipe( uglify() )
		.pipe( rename( { extname: '.min.js' } ) )
		.pipe( gulp.dest( toDir ) )
		;
} );

gulp.task( 'default', [], function() { gulp.start( 'js' ); } );