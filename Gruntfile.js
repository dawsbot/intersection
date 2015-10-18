module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-execute');

  grunt.registerTask('default', ['clean', 'execute', 'copy', 'browserify', 'watch']);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      js: 'lib/content.js'
    },
    copy: {
      main: {
        files: [
          {src: './manifest.json', dest: 'lib/'},
        ],
      },
    },
    execute: {
      target: {
            src: ['buildJSON.js']
        }
    },
    browserify: {
      options: {
        browserifyOptions: {
         debug: true
       }
      },
      main: {
        src: 'src/content.js',
        dest: 'lib/content.js'
      }
    },
    watch: {
      files: ['src/*.js','./buildJSON.js', 'corpora/*'],
      tasks: ['default']
    }
  });
};
