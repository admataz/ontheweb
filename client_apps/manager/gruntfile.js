'use strict';

module.exports = function(grunt) {
	// Project configuration
	grunt.initConfig({
		watch: {
			js: {
				files: ['gruntfile.js', './src/js/**/*.js', './src/scss/**/*.scss', '!./src/bower_components/**/*'],
				tasks: [ 'sass:dev']
			},
			hbs: {
				files: 'src/js/app/templates/**/*.hbs',
				tasks: ['shell:handlebars']
			},
			jshint: {
				files: ['src/app/js/**/*.js'],
				tasks: ['jshint']
			},
		},

		copy:{
			dist: {
				files:
				[
					{
						expand: true,
						cwd: 'src',
						src: ['**/*.html','!bower_components/**/*'],
						dest: 'dist'
					}
				]
			}

		},
		shell: {
			handlebars: {
				options: {
					stdout: true
				},
				command: "handlebars src/js/app/templates -f src/js/app/templates/template.js -a true -e hbs"
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
		// 
		sass: {                                 
        dist: {
        	options: {
                outputStyle: 'compressed'
            },
            files: {                        
                './dist/css/webitemsmanager.css': './src/scss/**/*.scss'     
            }
        }, 
        dev: {
        	options: {
                sourceComments: 'map'
            },
            files: {                        
                './src/css/webitemsmanager.css': './src/scss/**/*.scss'     
            }
        }, 

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
			dist: {
				options: {
					mainConfigFile: "src/js/require-config.js",
					name: "lib/almond/almond",
					include: ["src/js/app/main"],
					insertRequire: ["src/js/app/main"],
					baseUrl: "./",
					paths: {
						"lib": "src/bower_components",
						"app": "src/js/app",
		        "handlebars.runtime": "src/bower_components/handlebars/handlebars.runtime.amd",
		        "template":"src/app/templates/template",
		        "jquery":"src/bower_components/jquery/jquery",
		        "lodash":"src/bower_components/lodash/dist/lodash",
		        "backbone":"src/bower_components/backbone/backbone",
		        "schema":"src/bower_components/Backbone.Schema/src/backbone/schema",
		        "globalize":"src/bower_components/globalize/lib/globalize"
					},

					out: "dist/js/webitemsmanager.js",
					optimize: "uglify2",
					generateSourceMaps: false,
					preserveLicenseComments: false,
					wrap: true
				}
			}
		},

		processhtml: {
			dist: {
			  files: {
				'dist/index.html': ['dist/index.html']
			  }
			}
		  },

	});

	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);


	// Default task
	grunt.registerTask('default', ['concurrent:dev']);
	grunt.registerTask('build', ['requirejs:dist', 'sass:dist', 'copy:dist', 'processhtml:dist']);
};