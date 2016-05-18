module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            scripts: {
                files: ['*.html', '*/*.html', '*/*.css'],
                tasks: [],
                options: {
                    livereload: 9877
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);
}
