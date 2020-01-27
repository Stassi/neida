import { describe, it } from 'mocha'
import { expect } from 'chai'
import { spliceOne } from '../src'

describe('#spliceOne', () => {
  it('should splice an element at a specific index', () => {
    expect(
      spliceOne({
        data: ['b', 'b', 'b', 'b', 'b'],
        index: 2,
        item: 'c'
      })
    ).to.have.members(
      ['b', 'b', 'c', 'b', 'b']
    )
  })
})
