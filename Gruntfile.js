
module.exports = function(grunt) {
	grunt.initConfig({
		concat:{
			js:{
				src:['scripts/instafeed.min.js','scripts/preview.js','scripts/*.js'],
				dest:'build/concatScripts.js'
			}
		},
		uglify:{
			js:{
				files:{'build/totalScript.min.js': '<%= concat.js.dest %>'}
			}
		},
		csso: {
			compress: {
				options: {
					report: 'gzip'
				},
				files: {
					'build/compressed.css': 'stylesheets/main.css'
				}
			},
			restructure: {
				options: {
					restructure: false,
					report: 'min'
				},
				files: {
					'build/totalStyle.css': 'build/compressed.css'
				}
			}
		},
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'images/',
					src: ['**/*.{png,jpg}'],
					dest: 'optimizedImages/'
				}]
			}
		},
		jshint: {
			/*ignore_warning: {
      options: {
        '-W033': true,
      },
      src: ['scripts/*.js'],
    },*/
			options: {
        '-W033': true,
				curly: true,
				force: true,
				eqeqeq: true,
				eqnull: true,
				browser: true,
				globals: {
					jQuery: true
				}
			},
			all: ['Gruntfile.js', 'scripts/*.js']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-csso');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default',['concat','uglify','csso','imagemin','jshint']);
};