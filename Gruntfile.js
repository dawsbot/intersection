module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-execute');

  grunt.registerTask('default', ['clean', 'copy', 'execute', 'browserify', 'watch']);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      js: 'lib/content.js',
      json: 'lib/bayes.json'
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
      main: {
        src: 'src/content.js',
        dest: 'lib/content.js'
      }
    },
    watch: {
      files: 'src/*',
      tasks: ['default']
    }
  });
};
