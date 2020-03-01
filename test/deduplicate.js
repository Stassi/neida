import { describe, it } from 'mocha'
import { expect } from 'chai'
import { deduplicate } from '../src'

describe('#deduplicate', () => {
  it('should return an array without duplicate elements', () => {
    expect(
      deduplicate(
        ['a', 'b', 'c', 'c', 'd', 'e', 'e', 'e', 'e', 'f']
      )
    ).to.have.ordered.members(
      ['a', 'b', 'c', 'd', 'e', 'f']
    )
  })
})
