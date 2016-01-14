'use strict';

var compiler = require('vueify').compiler;

module.exports = function (content, file, conf) {
    var result = compiler.compile(content, function(err){
        if (err) {
            console.log('fis3-parser-vue Error: ');
            console.log(err);
            return;
        }
    });

    return result;
};
