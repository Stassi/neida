import { describe, it } from 'mocha'
import { expect } from 'chai'
import { lessThan } from '../src'

describe('#lessThan', () => {
  describe('value above highest threshold', () => {
    it('should return false', () => {
      expect(
        lessThan({
          highest: 10,
          value: 100
        })
      ).to.equal(false)
    })
  })

  describe('value below highest threshold', () => {
    it('should return true', () => {
      expect(
        lessThan({
          highest: 10,
          value: 2
        })
      ).to.equal(true)
    })
  })

  describe('value equals highest threshold', () => {
    it('should return false', () => {
      expect(
        lessThan({
          highest: 10,
          value: 10
        })
      ).to.equal(false)
    })
  })
})
