'use strict';

var compiler = require('vueify').compiler;

module.exports = function (content, file, conf) {
    var result = compiler.compile(content.toString('utf8'), file.realpath, function(err, result){
        if (err) {
            console.log('fis3-parser-vue Error: ');
            console.log(err);
            return;
        }
    });

    return result;
};
