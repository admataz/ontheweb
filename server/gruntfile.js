'use strict';

module.exports = function(grunt) {
	// Project configuration
	grunt.initConfig({

		concurrent: {
			dev: {
				tasks: ['nodemon:dev', 'node-inspector:dev'],
				options: {
					logConcurrentOutput: true
				}
			}
		},
		nodemon: {
			dev: {
				script: 'app/index.js',
				options: {
					nodeArgs: ['--debug'],
					env: {
						PORT: '8001'
					}
				}
			}
		},
	'node-inspector': {
	  dev: {}
	}

	});

	// These plugins provide necessary tasks
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-node-inspector');

	// Default task
	grunt.registerTask('default', ['concurrent:dev']);
};