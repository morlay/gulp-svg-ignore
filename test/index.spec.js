var gulp = require('gulp');
var assert = require('assert');
var gulpSvgIgnore = require('../index');
var mapStream = require('map-stream');
var cheerio = require('cheerio');
var _ = require('lodash');

describe('gulp svg ignore', function () {

  it('should work with gulp', function (done) {

    var selectorList = ['#GuildLines'];

    gulp.src(__dirname + '/src/*.svg')
      .pipe(gulpSvgIgnore(selectorList))
      .pipe(mapStream(function (file, callback) {
        var $ = cheerio.load(String(file.contents));
        _.forEach(selectorList, function (selector) {
          assert.equal($(selector).length, 0);
        });
        callback(null, file)
      }))
      .on('end', done);

  })

});
