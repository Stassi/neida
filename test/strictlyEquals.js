import { describe, it } from 'mocha'
import { expect } from 'chai'
import { strictlyEquals } from '../src'

describe('#strictlyEquals', () => {
  describe('provided 2 equal arguments', () => {
    it('should return true', () => {
      expect(strictlyEquals(4, 4)).to.equal(true)
      expect(strictlyEquals('y', 'y')).to.equal(true)
    })
  })

  describe('provided 2 unequal arguments', () => {
    it('should return false', () => {
      expect(strictlyEquals(2, 4)).to.equal(false)
      expect(strictlyEquals('x', 'y')).to.equal(false)
    })
  })
})
