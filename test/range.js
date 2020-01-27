import { describe, it } from 'mocha'
import { expect } from 'chai'
import { range } from '../src'

describe('#range', () => {
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
