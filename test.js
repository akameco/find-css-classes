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
    @keyframes App-logo-spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `
  expect(m(css)).toEqual(new Set(['a', 'b', 'c', 'testCase']))
})
