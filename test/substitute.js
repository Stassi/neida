import { describe, it } from 'mocha'
import { expect } from 'chai'
import { substitute } from '../src'

describe('#substitute', () => {
  it('should replace an element at a specified index in the returned array', () => {
    expect(
      substitute({
        collection: ['a', 'b', 'c', 'd', 'e', 'f'],
        index: 3,
        item: 'x'
      })
    ).to.have.ordered.members(['a', 'b', 'c', 'x', 'e', 'f'])
  })
})
