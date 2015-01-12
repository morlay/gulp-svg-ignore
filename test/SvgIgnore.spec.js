var assert = require('assert');
var SvgIgnore = require('../lib/SvgIgnore.js');

describe('SvgIgnore', function () {

  it('.transform', function () {

    var svgSrcString = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="GuildLines">12312312</g><g id="layer">1</g></svg>';
    var svgDestString = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="layer">1</g></svg>';

    var svgIgnore = new SvgIgnore([
      '#GuildLines'
    ]);

    assert.equal(svgIgnore.transform(svgSrcString), svgDestString);

  })

});
