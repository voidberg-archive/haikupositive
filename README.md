# haikupositive

[![travis build](https://img.shields.io/travis/voidberg/haikupositive.svg?style=flat-square)](https://travis-ci.org/voidberg/haikupositive)
[![codecov coverage](https://img.shields.io/codecov/c/github/voidberg/haikupositive.svg?style=flat-square)](https://codecov.io/github/voidberg/haikupositive)
[![version](https://img.shields.io/npm/v/haikupositive.svg?style=flat-square)](http://npm.im/haikupositive)
[![downloads](https://img.shields.io/npm/dm/haikupositive.svg?style=flat-square)](http://npm-stat.com/charts.html?package=haikupositive&from=2015-08-01)
[![MIT License](https://img.shields.io/npm/l/haikupositive.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

Get random haikus from [NetPositive's](https://en.wikipedia.org/wiki/NetPositive) error messages.

## Installation

This package is distributed via npm:

```
npm install haikupositive
```

## Usage

```javascript
var haikupositive = require('haikupositive');
var all = haikupositive.all;
var random = haikupositive.random();
var three = haikupositive.random(3);
```

## Other
This library was developed by [Alexandru Badiu](https://github.com/voidberg) during a live coding session at [I T.A.K.E. Unconference 2016](http://itakeunconf.com) about setting up a development workflow for Node packages.

It was heavily inspired by [starwars-names](https://github.com/kentcdodds/starwars-names) by [Kent C. Dodds](https://twitter.com/kentcdodds).
