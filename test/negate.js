import { describe, it } from 'mocha'
import { expect } from 'chai'
import { negate } from '../src'

describe('#negate', () => {
  describe('negative value', () => {
    it('should return the positive negation', () => {
      expect(negate(-10)).to.equal(10)
    })
  })

  describe('positive value', () => {
    it('should return the negative negation', () => {
      expect(negate(10)).to.equal(-10)
    })
  })
})
