'use strict';

module.exports = function(grunt) {
	// Project configuration
	grunt.initConfig({
		watch: {
			gruntfile: {
				files: ['./client_apps/**/*.js', './client_apps/**/*.scss', '!./client_apps/bower_components/**/*'],
				tasks: ['bookmarklet:generate', 'requirejs:bookmarklet', 'sass:dist', 'uglify:admin_ember', 'copy:admin_ember']
			}
		},

		bookmarklet: {
			generate: {
				// js: ['http://ontheweb.jit.su/docs/public/js/bookmarklet.js'],
				js: ['http://localhost:8001/docs/public/js/bookmarklet.js'],
				jsIds: ['webItemBookmarkletScript'],
				// css: ['http://ontheweb.jit.su/docs/public/js/bookmarklet.css'],
				css: ['http://localhost:8001/docs/public/js/bookmarklet.css'],
				cssIds: ['webItemBookmarkletStyle'],
				// body: './client/src/bookmarklet/stub.js',
				out: './public/js/bookmarklet_stub.txt',
				amdify: false,
				timestamp: false
			}
		},

		uglify: {
			admin_ember: {
				options:{
					beautify:false
				},
				files: [{
					src: ['client_apps/bower_components/jquery/jquery.js',
						'client_apps/bower_components/handlebars/handlebars.js',
						'client_apps/bower_components/ember/ember.js',
						'client_apps/bower_components/ember-data/ember-data.js'],
					dest: 'admin/js/ember.js'
					},
					{
						src: ['client_apps/manager/js/**/*.js'],
						dest: 'admin/js/app.js'
					}
					]
			}
		},
		copy: {
			admin_ember: {
				files: {
					'admin/index.html': 'client_apps/manager/index.html'
				}
				
			}


		},


		sass: {                                 
        dist: {     
        	options: {
                outputStyle: 'compressed'
            },
            files: {                        
                './public/js/bookmarklet.css': './client_apps/bookmarklet/main.scss'     
            }
        }
    },

		concurrent: {
			dev: {
				tasks: ['nodemon', 'watch'],
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

		requirejs: {
			bookmarklet: {
				options: {
					mainConfigFile: "client_apps/bookmarklet/config-require.js",
					name: "lib/almond/almond",
					include: ["client_apps/bookmarklet/main"],
					insertRequire: ["client_apps/bookmarklet/main"],
					baseUrl: "./",
					paths: {
						"lib": "./client_apps/bower_components",
					},

					out: "public/js/bookmarklet.js",
					optimize: "uglify2",
					generateSourceMaps: false,
					preserveLicenseComments: false,
					wrap: true
				}
			}
		},

		clean: {
			dist: ['dist/pega_cookie_machine/*', 'dist/**/*.html']
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
	grunt.loadNpmTasks('grunt-contrib-copy');

	// Default task
	grunt.registerTask('default', ['concurrent:dev']);
};