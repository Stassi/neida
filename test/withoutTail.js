import { describe, it } from 'mocha'
import { expect } from 'chai'
import { withoutTail } from '../src'

describe('#withoutTail', () => {
  it('should return a set without the last element', () => {
    expect(withoutTail(['b', 'b', 'b'])).to.have.members(['b', 'b'])
  })
})
