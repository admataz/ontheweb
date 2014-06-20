'use strict';

module.exports = function(grunt) {
	// Project configuration
	grunt.initConfig({
		watch: {
			gruntfile: {
				files: ['./src/**/*.js', './src/**/*.html', './src/**/*.scss', '!./bower_components/**/*'],
				tasks: ['bookmarklet:dev', 'requirejs:dev', 'sass:dev', 'copy:dev']
			}
		},

		copy: {
			dev: {
				src: './src/index.html',
				dest: './dist/index.html'
			}
		},

		bookmarklet: {
			dev: {
				js: ['http://localhost:8010/bookmarklet/bookmarklet.js'],
				jsIds: ['webItemBookmarkletScript'],
				css: ['http://localhost:8010/bookmarklet/bookmarklet.css'],
				cssIds: ['webItemBookmarkletStyle'],
				out: './dist/bookmarklet.txt',
				amdify: false,
				timestamp: false
			},
			dist: {
				js: ['//ontheweb.jit.su/bookmarklet/bookmarklet.js'],
				jsIds: ['webItemBookmarkletScript'],
				css: ['//ontheweb.jit.su/bookmarklet/bookmarklet.css'],
				cssIds: ['webItemBookmarkletStyle'],
				out: '../../server/public/bookmarklet/bookmarklet.txt',
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
					'../../server/public/bookmarklet/bookmarklet.css': './src/main.scss'
				}
			},
			dev: {
				options: {
					outputStyle: 'compressed'
				},
				files: {
					'./dist/bookmarklet.css': './src/main.scss'
				}
			}
		},

		requirejs: {
			dev: {
				options: {
					mainConfigFile: "src/config-require.js",
					name: "lib/requirejs/require",
					include: ["src/main"],
					insertRequire: ["src/main"],
					baseUrl: "./",
					paths: {
						"lib": "./bower_components",
						"app": "./src",
					},
					out: "dist/bookmarklet.js",
					optimize: "uglify2",
					generateSourceMaps: false,
					preserveLicenseComments: false,
					wrap: false
				}
			},
			dist: {
				options: {
					mainConfigFile: "src/config-require.js",
					name: "lib/almond/almond",
					include: ["src/main"],
					insertRequire: ["src/main"],
					baseUrl: "./",
					paths: {
						"lib": "./bower_components",
					},

					out: "../../server/public/bookmarklet/bookmarklet.js",
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
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-bookmarklet-thingy');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-sass');

	// Default task
	grunt.registerTask('default', ['concurrent:dev']);
	grunt.registerTask('build', ['bookmarklet:dist', 'requirejs:dist', 'sass:dist']);
};