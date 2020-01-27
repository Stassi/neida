import { describe, it } from 'mocha'
import { expect } from 'chai'
import { cardinality } from '../src'

describe('#cardinality', () => {
  it('should count the elements in a set', () => {
    expect(cardinality([1, 2, 4])).to.equal(3)
  })
})
