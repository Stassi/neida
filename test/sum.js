import { describe, it } from 'mocha'
import { expect } from 'chai'
import { sum } from '../src'

describe('#sum', () => {
  it('should return the sum of its arguments', () => {
    expect(sum(100, 220, 180)).to.equal(500)
  })
})
