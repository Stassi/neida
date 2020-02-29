import { describe, it } from 'mocha'
import { expect } from 'chai'
import { entries } from '../src'

describe('#entries', () => {
  describe('with arrays', () => {
    const collection = ['a', 'b', 'c', 'd']

    it('should return an array of [index, element] ordered pairs', () => {
      expect(entries(collection)).to.have.deep.ordered.members([
        ['0', 'a'],
        ['1', 'b'],
        ['2', 'c'],
        ['3', 'd']
      ])
    })
  })

  describe('with objects', () => {
    const collection = {
      a: 1,
      b: 3,
      c: 6,
      d: 10
    }

    it('should return an array of [key, value] ordered pairs', () => {
      expect(entries(collection)).to.have.deep.ordered.members([
        ['a', 1],
        ['b', 3],
        ['c', 6],
        ['d', 10]
      ])
    })
  })
})
