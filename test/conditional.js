import { describe, it } from 'mocha'
import { expect } from 'chai'
import { conditional } from '../src'

describe('#conditional', () => {
  const options = {
    ifFalse: () => 'falsy',
    ifTrue: () => 'truthy'
  }

  describe('truthy predicate', () => {
    it('should call truthy action', () => {
      expect(
        conditional({
          ...options,
          predicate: () => true
        })
      ).to.equal('truthy')
    })
  })

  describe('falsy predicate', () => {
    it('should call falsy action', () => {
      expect(
        conditional({
          ...options,
          predicate: () => false
        })
      ).to.equal('falsy')
    })
  })
})
