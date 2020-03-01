import { describe, it } from 'mocha'
import { expect } from 'chai'
import { or } from '../src'

describe('#or', () => {
  it('should return true if either called argument is truthy', () => {
    expect(
      or(
        () => true,
        () => false
      )
    ).to.equal(true)

    expect(
      or(
        () => false,
        () => true
      )
    ).to.equal(true)

    expect(
      or(
        () => true,
        () => true
      )
    ).to.equal(true)

    expect(
      or(
        () => false,
        () => false
      )
    ).to.equal(false)
  })
})
