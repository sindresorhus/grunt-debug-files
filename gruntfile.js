'use strict';
module.exports = grunt => {
	grunt.initConfig({
		debugFiles: {
			test: {
				files: {
					'dest/debug-files.js': 'tasks/debug-files.js',
					'dest/bar.png': 'src/bar.png'
				}
			}
		}
	});

	grunt.loadTasks('tasks');

	let match = false;

	grunt.util.hooker.hook(grunt.log, 'writeln', str => {
		if (/Logged/.test(str)) {
			match = true;
		}
	});

	grunt.registerTask('test', () => {
		if (!match) {
			grunt.warn('Tests failed');
		}
	});

	grunt.registerTask('default', ['debugFiles', 'test']);
};
