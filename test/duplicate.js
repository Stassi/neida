import { describe, it } from 'mocha'
import { expect } from 'chai'
import { duplicate } from '../src'

describe('#duplicate', () => {
  it('should generate an array of the same element and a specified length', () => {
    expect(
      duplicate({
        length: 5,
        value: 'b'
      })
    ).to.have.members(
      ['b', 'b', 'b', 'b', 'b']
    )
  })
})
