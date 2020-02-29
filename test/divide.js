import { describe, it } from 'mocha'
import { expect } from 'chai'
import { divide } from '../src'

describe('#divide', () => {
  it('should return the quotient', () => {
    expect(
      divide({
        divisor: 10,
        dividend: 200
      })
    ).to.equal(20)

    expect(
      divide({
        divisor: 200,
        dividend: 10
      })
    ).to.equal(0.05)
  })
})
