# grunt-css-docs

> CSS Styleguide Generator focused on CSS Modular Architectures

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-cssdocs --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-cssdocs');
```

## The "css_docs" task

### Usage
In your project's Gruntfile, add a section named `css_docs` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  css_docs: {
    mydocs: {
      title: 'mydocs',
      logo: false,
      docsPath: 'test/tmp/',
      docsAssetsPath: 'test/tmp/assets/css-docs/',
      styleDir: 'test/fixtures/scss/',
      styleFileExt: ['.scss', '.css', '.sass', '.styl', '.less'],
      ignore: ['**/bourbon/**'],
      builtAssetsDir: 'test/fixtures/'
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
