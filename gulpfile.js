// Node & NPM packages
const merge = require('merge-stream'),
			path = require('path'),
			gulp = require('gulp'),
			rename = require('gulp-rename'),
			zip = require('gulp-zip');

// Custom modules & config
const util = require('./lib/fsUtils');

const dir = {
	src:'./src',
	dist:'./dist'
}

const srcFolders = util.getFolders(dir.src);

// Gulp Tasks
gulp.task('default', zipFiles);

function zipFiles(cb) {
	let task = srcFolders.map(function(folder) {
		let _src = path.join(dir.src, folder),// Path source files
				_files = _src+'/*.{css,html,js,json,jpg,png,gif}', // Package banner files into the _final zip
				_images = _src+'/images/**';

		let _final =  gulp.src([_files,_images],{base:_src})
			.pipe(zip('_final.zip'))
			.pipe(rename(function(file){file.basename = folder + file.basename;}))
			.pipe(gulp.dest(dir.dist));

		let _html =  gulp.src(path.join(dir.src, folder,'*.html'))
			.pipe(gulp.dest(dir.dist));
		
		/*
			Uncomment below to make a _source.zip of all source files except node_modules 
		*/
		// let _source =  gulp.src(['*.{json,js,txt,md}', 'lib/**', _src+'/**/*', 'dist'],{base:'./'})
		// .pipe(zip('_source.zip'))
		// .pipe(rename(function(file){file.basename = folder + file.basename;}))
		// .pipe(gulp.dest(dir.dist));
		// return merge(_source, _final, _html)

		return merge(_final, _html)
	});
	cb();
};