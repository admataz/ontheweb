'use strict';

module.exports = function(grunt) {
	// Project configuration
	grunt.initConfig({
		watch: {
			gruntfile: {
				files: ['./src/**/*.js', './src/**/*.scss', '!./bower_components/**/*'],
				tasks: ['bookmarklet:generate', 'requirejs:bookmarklet', 'sass:dist']
			}
		},

		bookmarklet: {
			generate: {
				// js: ['http://ontheweb.jit.su/docs/public/js/bookmarklet.js'],
				js: ['http://localhost:8001/bookmarklet.js'],
				jsIds: ['webItemBookmarkletScript'],
				// css: ['http://ontheweb.jit.su/docs/public/js/bookmarklet.css'],
				css: ['http://localhost:8001/bookmarklet.css'],
				cssIds: ['webItemBookmarkletStyle'],
				// body: './client/src/bookmarklet/stub.js',
				out: './dist/bookmarklet_stub.txt',
				amdify: false,
				timestamp: false
			}
		},
		sass: {                                 
        dist: {     
        	options: {
                outputStyle: 'compressed'
            },
            files: {                        
                './dist/bookmarklet.css': './src/main.scss'     
            }
        }
    },

		requirejs: {
			bookmarklet: {
				options: {
					mainConfigFile: "src/config-require.js",
					name: "lib/almond/almond",
					include: ["src/main"],
					insertRequire: ["src/main"],
					baseUrl: "./",
					paths: {
						"lib": "./bower_components",
					},

					out: "dist/bookmarklet.js",
					optimize: "uglify2",
					generateSourceMaps: false,
					preserveLicenseComments: false,
					wrap: true
				}
			}
		},

		clean: {
			dist: ['dist/**.*']
		},

		concurrent: {
			dev: {
				tasks: ['watch'],
				options: {
					logConcurrentOutput: true
				}
			}
		}


	});

	// These plugins provide necessary tasks
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-bookmarklet-thingy');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-sass');

	// Default task
	grunt.registerTask('default', ['concurrent:dev']);
};