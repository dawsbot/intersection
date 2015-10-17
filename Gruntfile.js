module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['clean', 'copy', 'browserify', 'watch']);

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
