module.exports = function (grunt) {


    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'css/main.css': 'css/main.sass',
                    'css/main2.css': 'css/main2.sass'
                }
            }
        },



        watch: {

            css: {
                files: ['css/*', '/*'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
            },
            options: {
                atBegin: true,
                livereload: true
            }
        },




    });

    grunt.registerTask('build', ['sass']);
    grunt.registerTask('default', ['watch']);

};
