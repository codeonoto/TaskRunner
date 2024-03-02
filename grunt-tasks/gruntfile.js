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

    // Minify CSS

    cssmin: {
      target: {
        files: [
          {
            expand: true,
            cwd: 'src/css',
            src: ['*.css', '!*.min.css'],
            dest: 'dest/css',
            ext: '.min.css',
          },
        ],
      },
    },
  });

  // Load libraries
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin')

  // Setting Up Tasks.
  grunt.registerTask('default', ['uglify', 'cssmin']);
};
