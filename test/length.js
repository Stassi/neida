import { describe, it } from 'mocha'
import { expect } from 'chai'
import { length } from '../src'

describe('#length', () => {
  describe('with array', () => {
    const collection = ['a', 'b', 'c']

    it('should count the total elements in an array', () => {
      expect(length(collection)).to.equal(3)
    })
  })

  describe('with object', () => {
    const collection = {
      a: 10,
      b: 30,
      c: 60
    }

    it('should count the total entries in an object', () => {
      expect(length(collection)).to.equal(3)
    })
  })

  describe('with string', () => {
    const collection = 'abc'

    it('should count the total characters in a string', () => {
      expect(length(collection)).to.equal(3)
    })
  })
})
