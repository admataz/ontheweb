'use strict';

module.exports = function(grunt) {
	// Project configuration
	grunt.initConfig({
		watch: {
			gruntfile: {
				files: ['./src/**/*.js', './src/**/*.scss', '!./bower_components/**/*'],
				tasks: ['requirejs:manager', 'sass:dist']
			}
		},

		

		// uglify: {
		// 	dev: {
		// 		options:{
		// 			beautify:true
		// 		},
		// 		files: [{
		// 			src: ['src/bower_components/reqwest/reqwest.js', 'src/bookmarklet/main.js'],
		// 			dest: 'public/js/bookmarklet.js'
		// 		}]
		// 	}
		// },
		sass: {                                 
        dist: {     
        	options: {
                outputStyle: 'compressed'
            },
            files: {                        
                './dist/css/webitemsmanager.css': './src/main.scss'     
            }
        }
    },

		concurrent: {
			dev: {
				tasks: ['watch'],
				options: {
					logConcurrentOutput: true
				}
			}
		},

		requirejs: {
			manager: {
				options: {
					mainConfigFile: "src/config-require.js",
					name: "lib/almond/almond",
					include: ["src/main"],
					insertRequire: ["src/main"],
					baseUrl: "./",
					paths: {
						"lib": "./bower_components",
					},

					out: "dist/js/webitemsmanager.js",
					optimize: "uglify2",
					generateSourceMaps: false,
					preserveLicenseComments: false,
					wrap: true
				}
			}
		},



	});

	// These plugins provide necessary tasks
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-sass');

	// Default task
	grunt.registerTask('default', ['concurrent:dev']);
};