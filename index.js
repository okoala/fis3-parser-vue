'use strict';

var compiler = require('vueify-sync').compiler;

module.exports = function (content, file, conf) {
  var result = '';
  // 用 HTML 相关语言能力处理一遍
  if (fis.compile.partial && file.ext === '.vue') {
    content = fis.compile.partial(content, file, {
      ext: '.html',
      isHtmlLike: true
    });
  }
  try {
    result = compiler.compileSync(content.toString('utf8'), file.realpath);
  } catch (e) {
    console.log(e.stack);
  }
  return result;
};
