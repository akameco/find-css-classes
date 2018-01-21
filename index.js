// @flow
'use strict'
const parser = require('postcss-scss')
const selectorParser = require('postcss-selector-parser')

module.exports = (input /*: string */) /*: Set<string> */ => {
  const set = new Set()

  const transform = selectors => {
    selectors.walkClasses(selector => {
      const className = String(selector)
        .trim()
        .substring(1)

      set.add(className)
    })
  }

  const result = parser.parse(input)
  for (const node of result.nodes) {
    if (node.selector) {
      selectorParser(transform).processSync(node.selector)
    }
  }

  return set
}
