import { describe, it } from 'mocha'
import { expect } from 'chai'
import { not } from '../src'

describe('#not', () => {
  it('should return its logical inverse', () => {
    expect(not(true)).to.equal(false)
    expect(not(false)).to.equal(true)
  })
})
