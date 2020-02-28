import { describe, it } from 'mocha'
import { expect } from 'chai'
import { length } from '../src'

describe('#length', () => {
  it('should count the elements in an array including duplicates', () => {
    expect(length([1, 2, 4])).to.equal(3)
  })
})
