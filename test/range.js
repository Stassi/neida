import { describe, it } from 'mocha'
import { expect } from 'chai'
import { range } from '../src'

describe('#range', () => {
  describe('0-distance ranges', () => {
    it('should return an empty array', () => {
      expect(
        range({ maximum: 0, minimum: 0 })
      ).to.be.an('array').that.has.a.lengthOf(0)

      expect(
        range({ minimum: 5, maximum: 5 })
      ).to.be.an('array').that.has.a.lengthOf(0)
    })
  })

  describe('1-distance ranges', () => {
    it('should return the minimum', () => {
      expect(range({ minimum: 0, maximum: 1 })[0]).to.equal(0)
      expect(range({ minimum: 2, maximum: 3 })[0]).to.equal(2)
    })
  })

  describe('n-distance ranges', () => {
    it('should generate a set of incrementing numbers between two numbers', () => {
      expect(
        range({
          maximum: 3,
          minimum: -3
        })
      ).to.have.members(
        [-3, -2, -1, 0, 1, 2]
      )
    })
  })
})
