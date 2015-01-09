// Configuring grunt-open & grunt-express inside our root folder
//Let's begin it, finger's cross :)

module.exports = function(grunt) {
    
    //Load tasks & declare from package.json all we need to run Grunt
    require ('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    
    //Init config for Grunt
    grunt.initConfig({
        // grunt-express will serve the files in folder listed in 'base'
        // and seting up on which 'port' and 'hostname'
        //init Express
        express: {
             all: {
                 // under options we will setup hostname and port
                options: {
                    port: 9000,
                    hostname: '0.0.0.0',
                    bases: [__dirname], // Caution dont use "." or ".." it returns 
                                         //returns 403 Forbidden responses so make 
                                         //sure you dont use it
                     livereload: true                     
                }   
            }
        },
        
         watch: {
             all: {
              files: ['index.html','css/**/*.css','js/libs/skelJS/**/*.js'],
               options: {
                   livereload: true
               }
         }
     },  
            // At this step we are config the path of our project's URL with any luck grunt-open
            // will fire up browser of our project (I hope :) )
            open: {
                all: {
                    // Let's grab the configuration from connection
                    path: 'http://localhost:<%= express.all.options.port%>'
                    // Connection ready,hm...
                }
            }
        });
        
 // Last step now we will with grunt create tasks
    grunt.registerTask('server',[
        'express',
        'open',
        //'express-keepalive',
        'watch'
    ]);
  };
