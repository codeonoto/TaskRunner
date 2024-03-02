module.exports = function (grunt) {
  // Configure the tasks.

  grunt.initConfig({
    // Specify Tasks.
    uglify: {
      target: {
        files: {
          'dest/js/main.min.js': ['src/js/*.js'],
        },
      },
    },
  });

  // Load libraries
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Setting Up Tasks.
  grunt.registerTask('default', ['uglify']);
};
