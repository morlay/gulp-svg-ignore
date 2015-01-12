## svg ignore

Just for removing the layers of svg sources

[![Build Status](https://travis-ci.org/morlay/svg-ignore.svg?branch=master)](https://travis-ci.org/morlay/svg-ignore)
[![Dependencies](https://david-dm.org/morlay/svg-ignore.png)](https://david-dm.org/morlay/svg-ignore)

## Usage

* selectorList: input an array with jQuery style selector

   gulp.src('*.svg').pipe(gulpSvgIgnore(['#layer']))
