# find-css-classes

[![Greenkeeper badge](https://badges.greenkeeper.io/akameco/find-css-classes.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/akameco/find-css-classes.svg?branch=master)](https://travis-ci.org/akameco/find-css-classes)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

> find css classes

## Install

```
$ npm install find-css-classes
```

## Usage

```js
const findCssClasses = require('find-css-classes')

const css = `
  .a {
    padding: 0;
  }
  .b:hover, .c {
    color: red;
  }
  .testCase {
    color: white;
  }
`

findCssClasses(css)
//=> Set{ 'a', 'b', 'c', 'testCase' }
```

## API

### `findCssClasses(css)`

#### css

Type: `string`

css source.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/4002137?v=4" width="100px;"/><br /><sub>akameco</sub>](http://akameco.github.io)<br />[💻](https://github.com/akameco/find-css-classes/commits?author=akameco "Code") [📖](https://github.com/akameco/find-css-classes/commits?author=akameco "Documentation") [⚠️](https://github.com/akameco/find-css-classes/commits?author=akameco "Tests") [🚇](#infra-akameco "Infrastructure (Hosting, Build-Tools, etc)") |
| :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License

MIT © [akameco](http://akameco.github.io)
