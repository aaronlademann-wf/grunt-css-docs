/*
 * grunt-css-docs
 * https://github.com/vieron/grunt-css-docs
 *
 * Copyright (c) 2014 vieron
 * Licensed under the MIT license.
 */

'use strict';

var CSSDocs = require('css-docs');

module.exports = function(grunt) {
    grunt.registerMultiTask('css_docs', 'Generate CSS Documentation', function() {
        var cssdocs = new CSSDocs(this.data);
        cssdocs.run();

        grunt.log.writeln('CSS Docs generated');
    });
};