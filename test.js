// @flow
const m = require('.')

test('return class names', () => {
  const css = `
    .a {padding: 0;}
    .b:hover, .c {
      color: red;
    }
    .testCase {
      color: white;
    }
  `
  expect(m(css)).toEqual(new Set(['a', 'b', 'c', 'testCase']))
})
