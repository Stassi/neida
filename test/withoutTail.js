import { describe, it } from 'mocha'
import { expect } from 'chai'
import { withoutTail } from '../src'

describe('#withoutTail', () => {
  it('should return an array without the last element', () => {
    expect(
      withoutTail(['a', 'b', 'c', 'd'])
    ).to.have.ordered.members(
      ['a', 'b', 'c']
    )
  })
})
