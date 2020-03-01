import { describe, it } from 'mocha'
import { expect } from 'chai'
import { includes } from '../src'

describe('#includes', () => {
  describe('with array', () => {
    const collection = ['a', 'b', 'c', 'd']

    it('should return true if the array contains the element', () => {
      expect(
        includes({ collection, element: 'b' })
      ).to.equal(true)
    })

    it('should return false if the array does not contain the element', () => {
      expect(
        includes({ collection, element: 'x' })
      ).to.equal(false)
    })
  })

  describe('with string', () => {
    it('should return true if the string contains the substring')
  })
})
