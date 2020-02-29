import { describe, it } from 'mocha'
import { expect } from 'chai'
import { forEach } from '../src'

describe('#forEach', () => {
  describe('with array', () => {
    const collection = ['a', 'b', 'c', 'd']

    it('should iteratively provide [index, element] ordered pairs to callback', () => {
      let res = []

      forEach({
        collection,
        callback: x => { res = [...res, x] }
      })

      expect(res).to.have.deep.ordered.members([
        ['0', 'a'],
        ['1', 'b'],
        ['2', 'c'],
        ['3', 'd']
      ])
    })
  })

  describe('with object', () => {
    const collection = {
      a: 1,
      b: 20,
      c: 25,
      d: 50
    }

    it('should iteratively provide [key, value] ordered pairs to callback', () => {
      let res = []

      forEach({
        collection,
        callback: x => { res = [...res, x] }
      })

      expect(res).to.have.deep.ordered.members([
        ['a', 1],
        ['b', 20],
        ['c', 25],
        ['d', 50]
      ])
    })
  })
})
