import { describe, it } from 'mocha'
import { expect } from 'chai'
import { conditional } from '../src'

describe('#conditional', () => {
  const options = {
    ifFalse: () => false,
    ifTrue: () => true
  }

  describe('truthy predicate', () => {
    it('should call truthy action', () => {
      expect(
        conditional({
          ...options,
          predicate: () => true
        })
      ).to.be.true
    })
  })

  describe('falsy predicate', () => {
    it('should call falsy action', () => {
      expect(
        conditional({
          ...options,
          predicate: () => false
        })
      ).to.be.false
    })
  })
})
