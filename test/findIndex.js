import { describe, it } from 'mocha'
import { expect } from 'chai'
import { findIndex, lessThan } from '../src'

describe('#findIndex', () => {
  describe('predicate: x > 50', () => {
    const predicate = highest => lessThan({ highest, value: 50 })

    it('should return the index of the first element that satisfies a predicate', () => {
      expect(
        findIndex({
          predicate,
          collection: [10, 20, 100, 200]
        })
      ).to.equal(2)
    })
  })
})
