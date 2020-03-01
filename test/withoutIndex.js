import { describe, it } from 'mocha'
import { expect } from 'chai'
import { withoutIndex } from '../src'

describe('#withoutIndex', () => {
  it('should return an array without the specific index', () => {
    expect(
      withoutIndex({
        collection: ['a', 'b', 'c', 'd', 'e'],
        index: 3
      })
    ).to.have.ordered.members(
      ['a', 'b', 'c', 'e']
    )
  })
})
