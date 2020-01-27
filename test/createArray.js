import { describe, it } from 'mocha'
import { expect } from 'chai'
import { createArray } from '../src'

describe('#createArray', () => {
  it('should generate an array', () => {
    expect(
      createArray({
        length: 5,
        value: 'b'
      })
    ).to.have.members(
      ['b', 'b', 'b', 'b', 'b']
    )
  })
})
