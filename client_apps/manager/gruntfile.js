'use strict';

module.exports = function(grunt) {
	// Project configuration
	grunt.initConfig({
		watch: {
			js: {
				files: ['gruntfile.js', './src/js/**/*.js', './src/scss/**/*.scss', '!./src/bower_components/**/*'],
				tasks: ['sass:dev']
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

		copy: {
			dist: {
				files: [{
					expand: true,
					cwd: 'src',
					src: ['**/*.html', '!bower_components/**/*'],
					dest: 'dist'
				}]
			},
			server: {
				files: [{
					expand: true,
					cwd: 'dist',
					src: ['**/*.*'],
					dest: '../../server/admin'
				}]
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

		nodemon: {
			dev: {
				script: 'server.js',
				options: {
					// nodeArgs: ['--debug']
				}
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
					'./dist/css/webitemsmanager.css': './src/scss/main.scss'
				}
			},
			dev: {
				options: {
					sourceComments: 'map',
					sourceMap: 'webitemsmanager.css.map'
				},
				files: {
					'./src/css/webitemsmanager.css': './src/scss/main.scss'
				}
			},
		},

		concurrent: {
			dev: {
				tasks: ['watch', 'nodemon:dev'],
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
					include: ["../require.config.dist", "app/main"],
					insertRequire: ["app/main"],
					baseUrl: "src/js",
					paths: {
						"lib": "../bower_components",
						"app": "app",
						"handlebars.runtime": "../bower_components/handlebars/handlebars.runtime.amd",
						"template": "./app/templates/template",
						"jquery": "../bower_components/jquery/jquery",
						"underscore": "../bower_components/lodash/dist/lodash.underscore",
						"backbone": "../bower_components/backbone/backbone",
						"layoutmanager": "../bower_components/layoutmanager/backbone.layoutmanager",
						"backbone-pageable": "../bower_components/backbone-pageable/lib/backbone-pageable",
						"bootstrap": "../bower_components/sass-bootstrap/dist/js/bootstrap",
						"backgrid": "../bower_components/backgrid/lib/backgrid",
						"backgrid-filter": "../bower_components/backgrid-filter/backgrid-filter",
						"backgrid-moment-cell": "../bower_components/backgrid-moment-cell/backgrid-moment-cell",
						"backgrid-paginator": "../bower_components/backgrid-paginator/backgrid-paginator",
						"backgrid-select-all": "../bower_components/backgrid-select-all/backgrid-select-all",
						"backgrid-select2-cell": "../bower_components/backgrid-select2-cell/backgrid-select2-cell",
						"backgrid-text-cell": "../bower_components/backgrid-text-cell/backgrid-text-cell",
						"schema": "../bower_components/Backbone.Schema/src/backbone/schema",
						"globalize": "../bower_components/globalize/lib/globalize"
					},

					out: "dist/js/webitemsmanager.js",
					optimize: "uglify2",
					generateSourceMaps: false,
					preserveLicenseComments: false,
					findNestedDependencies:true,
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
	grunt.registerTask('build', ['requirejs:dist', 'sass:dist', 'copy:dist', 'processhtml:dist', 'copy:server']);
};