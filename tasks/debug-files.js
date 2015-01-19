'use strict';
var chalk = require('chalk');

module.exports = function (grunt) {
	grunt.registerMultiTask('debugFiles', 'Debug files', function () {
		grunt.log.writeln();

		this.files.forEach(function (el) {
			var src = el.orig.src[0];

			if (!el.src[0]) {
				src += ' ' + chalk.red('(not found)');
			}

			grunt.log.writeln(chalk.blue(src), chalk.dim('→'), chalk.blue(el.dest));
		});

		grunt.log.writeln('\n' + chalk.magenta('Logged', this.files.length, this.files.length === 1 ? 'file' : 'files'));
	});
};
