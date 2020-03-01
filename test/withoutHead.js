import { describe, it } from 'mocha'
import { expect } from 'chai'
import { withoutHead } from '../src'

describe('#withoutHead', () => {
  it('should return an array without the first element', () => {
    expect(
      withoutHead(['a', 'b', 'c', 'd'])
    ).to.have.ordered.members(
      ['b', 'c', 'd']
    )
  })
})
