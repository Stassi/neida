import { describe, it } from 'mocha'
import { expect } from 'chai'
import { map } from '../src'

describe('#map', () => {
  it('should return each value transformed', () => {
    expect(
      map({
        collection: [0, 1, 2, 3, 4],
        transform: x => x * 2
      })
    ).to.have.members(
      [0, 2, 4, 6, 8]
    )
  })
})
