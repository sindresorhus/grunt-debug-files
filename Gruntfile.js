'use strict';
module.exports = function (grunt) {
	grunt.initConfig({
		debugFiles: {
			test: {
				files: {
					'dest/debug-files.js': 'tasks/debug-files.js',
					'dest/bar.png': 'src/bar.png',
				}
			}
		}
	});

	grunt.loadTasks('tasks');

	var match = false;

	grunt.util.hooker.hook(grunt.log, 'writeln', function (str) {
		if (/Logged/.test(str)) {
			match = true;
		}
	});

	grunt.registerTask('test', function () {
		if (!match) {
			grunt.warn('Tests failed');
		}
	});

	grunt.registerTask('default', ['debugFiles', 'test']);
};
