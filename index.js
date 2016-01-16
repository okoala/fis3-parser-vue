'use strict';

var compiler = require('vueify-sync').compiler;

module.exports = function (content, file, conf) {
  var result = ''
  try {
    result = compiler.compileSync(content.toString('utf8'), file.realpath);
  } catch (e) {
    console.log(e.stack)
  }
  return result
};
