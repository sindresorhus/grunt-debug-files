'use strict';
const chalk = require('chalk');

module.exports = grunt => {
	grunt.registerMultiTask('debugFiles', 'Debug files', function () {
		grunt.log.writeln();

		for (const file of this.files) {
			let src = file.orig.src[0];

			if (!file.src[0]) {
				src += ' ' + chalk.red('(not found)');
			}

			grunt.log.writeln(chalk.blue(src), chalk.dim('→'), chalk.blue(file.dest));
		}

		grunt.log.writeln('\n' + chalk.magenta('Logged', this.files.length, this.files.length === 1 ? 'file' : 'files'));
	});
};
