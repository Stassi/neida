import { describe, it } from 'mocha'
import { expect } from 'chai'
import { minimum } from '../src'

describe('#minimum', () => {
  describe('with value above threshold', () => {
    it('should return the high value instead of low threshold', () => {
      expect(minimum({
        lowest: 0,
        value: 50
      })).to.equal(50)
    })
  })

  describe('with value below threshold', () => {
    it('should return the high threshold instead of low value', () => {
      expect(minimum({
        lowest: 0,
        value: -50
      })).to.equal(0)
    })
  })
})
