module.exports = function (grunt) {
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    cssmin: {
      sitecss: {
        options: {
          banner: "",
        },
        files: {
          "Grunt/css/all.min.css": [
            "!dist/**",
            "**/**/**/*.scss",
            "**/**/*.scss",
            "**/*.scss",
            "*.scss",
          ],
          "Grunt/css/distCssMinify.css": [
            "distmovie-xstyles.8ccb209f143e9d21.css",
          ],
        },
      },
    },
    uglify: {
      options: {
        compress: true,
      },
      applib: {
        src: ["dist/movie-x/*.js"],
        dest: "Grunt/js/all.min.js",
      },
    },
  });
  // Default task.
  grunt.registerTask("default", ["uglify", "cssmin"]);
};
