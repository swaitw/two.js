// https://npmjs.org/package/node-minify

var path = require('path');
var _ = require('underscore');
var fs = require('fs');
var minify = require('@node-minify/core');
var noCompress = require('@node-minify/no-compress');
var gcc = require('@node-minify/google-closure-compiler');
var sourceFiles = require('./source-files');

var files = [
  path.resolve(__dirname, './start-comment.js'),
  path.resolve(__dirname, '../LICENSE'),
  path.resolve(__dirname, './end-comment.js'),
].concat(_.map(sourceFiles, function(file) {
  return path.resolve(__dirname, '../' + file);
}));

// Concatenated
minify({
  compressor: noCompress,
  input: files,
  output: path.resolve(__dirname, '../build/two.js'),
  callback: function(e) {

    if (!e) {

      console.log('concatenation complete');
      var source = fs.readFileSync(path.resolve(__dirname, '../build/two.js'), {
        encoding: 'utf-8'
      });
      var template = _.template(source);
      source = template({
        publishDate: (new Date()).toISOString()
      });
      fs.writeFileSync(path.resolve(__dirname, '../build/two.js'), source, {
        encoding: 'utf-8'
      });

      // Minified
      minify({
        compressor: gcc,
        input: path.resolve(__dirname, '../build/two.js'),
        output: path.resolve(__dirname, '../build/two.min.js'),
        callback: function(e) {
          if (!e) {
            console.log('minified complete');
          } else {
            console.log('unable to minify', e);
          }
        }
      });

      minify({
        compressor: noCompress,
        input: [
          path.resolve(__dirname, '../build/two.js'),
          path.resolve(__dirname, './exports.js')
        ],
        output: path.resolve(__dirname, '../build/two.module.js'),
        callback: function(e) {
          if (!e) {
            console.log('module complete');
          } else {
            console.log('unable to create module', e);
          }
        }
      });

    } else {

      console.log('unable to concatenate', e);
    }

  }

});
