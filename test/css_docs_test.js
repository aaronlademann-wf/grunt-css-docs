'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.css_docs = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },

  mydocs: function(test) {
      var pages = [
        'index',
        'typography',
        'typography/headings',
        'typography/headings/links',
        'components/button',
        'components/button/icon',
        'components/buttonGroup',
        'components/icon'
      ];

      test.expect(pages.length);

      pages.forEach(function(page) {
          test.ok(grunt.file.read('test/tmp/' + page + '.html'),
            'Doc page [' + page + '] should be created');
      });

      test.done();
  }
};
