/* eslint-env jest */
'use strict'

import f from './src'

test('should export object', () => {
  expect(f).toBeDefined()
  expect(typeof f).toBe('object')
})

test('should map', () => {
  const { map } = f
  const timesTwo = x => x * 2
  const arr = [1, 2, 3, 4]

  expect(map(timesTwo)(arr)).toContain(...[2, 4, 6, 8])
})

test('should reduce', () => {
  const { reduce } = f
  const sum = reduce((a, b) => a + b)
  expect(sum([1, 2, 3])).toBe(6)
})

test('should curry', () => {
  const { curry } = f
  const add = (a, b) => a + b
  const addOne = curry(add)(1)
  expect(addOne(5)).toBe(6)
})

test('should flatMap', () => {
  const { flatMap } = f
  const fill = flatMap(x => {
    return new Array(x).fill(x)
  })

  expect(fill([1, 2, 3]).length).toBe(6)
})
