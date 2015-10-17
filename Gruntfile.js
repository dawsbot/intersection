module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['copy', 'browserify', 'watch']);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      main: {
        files: [
          {src: './manifest.json', dest: 'lib/'},
        ],
      },
    },
    browserify: {
      main: {
        src: 'src/censordContent.js',
        dest: 'lib/censordContent.js'
      }
    },
    watch: {
      files: 'src/*',
      tasks: ['default']
    }
  });
};
