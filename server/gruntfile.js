'use strict';

module.exports = function(grunt) {
	// Project configuration
	grunt.initConfig({

		concurrent: {
			dev: {
				tasks: ['nodemon'],
				options: {
					logConcurrentOutput: true
				}
			}
		},
		nodemon: {
			dev: {
				options: {
					nodeArgs: ['--debug'],
					env: {
						PORT: '8001'
					}
				}
			}
		},


	});

	// These plugins provide necessary tasks
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-concurrent');

	// Default task
	grunt.registerTask('default', ['concurrent:dev']);
};