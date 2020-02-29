import { describe, it } from 'mocha'
import { expect } from 'chai'
import { strictEqual } from '../src'

describe('#strictEqual', () => {
  describe('provided 2 equal arguments', () => {
    it('should return true', () => {
      expect(strictEqual(4, 4)).to.equal(true)
      expect(strictEqual('y', 'y')).to.equal(true)
    })
  })

  describe('provided 2 unequal arguments', () => {
    it('should return false', () => {
      expect(strictEqual(2, 4)).to.equal(false)
      expect(strictEqual('x', 'y')).to.equal(false)
    })
  })
})
