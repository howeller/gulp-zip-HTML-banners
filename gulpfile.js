// Node & NPM packages
const merge = require('merge-stream'),
			path = require('path'),
			gulp = require('gulp'),
			rename = require('gulp-rename'),
			zip = require('gulp-zip');

// Custom modules & config
const util = require('./lib/fsUtils');

const paths = {
	src:'./src/banners',
	dist:'./dist'
}

const srcFolders = util.getFolders(paths.src);

// Gulp Tasks
gulp.task('default', zipFiles);

function zipFiles() {
	let task = srcFolders.map(function(folder) {
		let _src = path.join(paths.src, folder),// Path source files
				_files = _src+'/*.{css,html,js,json}', // Package banner files into the _final zip
				_images = _src+'/images/**';// Path to production image files

		let _final =  gulp.src([_files,_images],{base:_src})
			.pipe(zip('_final.zip'))
			.pipe(rename(function(file){file.basename = folder + file.basename;}))
			.pipe(gulp.dest(paths.dist));

		let _html =  gulp.src(path.join(paths.src, folder,'*.html'))
			.pipe(gulp.dest(paths.dist));
		return merge(_final, _html)
	});
	let lastStream = task[task.length-1];
	return lastStream;
};