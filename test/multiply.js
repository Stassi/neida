import { describe, it } from 'mocha'
import { expect } from 'chai'
import { multiply } from '../src'

describe('#multiply', () => {
  it('should return the product of two numbers', () => {
    expect(multiply(4, 5)).to.equal(20)
    expect(multiply(5, 4)).to.equal(20)
  })
})
