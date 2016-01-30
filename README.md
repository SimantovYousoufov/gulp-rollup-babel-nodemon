# A NodeJS Development toolchain using...

* [Babel 6](https://babeljs.io/) for ES2015 transpiling
* [Rollup.js](http://rollupjs.org/) for efficient JS module bundling
* [gulp-node-inspector](https://www.npmjs.com/package/gulp-node-inspector) for debugging
* [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) so you can debug the non-transpiled code
* [gulp-nodemon](https://www.npmjs.com/package/gulp-nodemon) to watch for JS changes and restart your app
* [ESLint](http://eslint.org/) with the [AirBnB rules](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) (I'm running the linter in Sublime Text 3)

I originally tried to get this all working using npm scripts alone, but encountered various issues. Using gulp is a useful way to compose all the above tools.

This won't scale well for very large apps as it actually transpiles, bundles and writes built file to disk before running. It works for now if you want to getting up-and-running quickly with this workflow, but it can definitely be improved...