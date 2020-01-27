import { describe, it } from 'mocha'
import { expect } from 'chai'
import { tail } from '../src'

describe('#tail', () => {
  it('should return the last element in a set', () => {
    expect(tail(['w', 'x', 'y'])).to.equal('y')
  })
})
