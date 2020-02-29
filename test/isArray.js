import { describe, it } from 'mocha'
import { expect } from 'chai'
import { isArray } from '../src'

describe('#isArray', () => {
  it('should return true if the parameter is an array', () => {
    expect(isArray([])).to.equal(true)
    expect(isArray({})).to.equal(false)
  })
})
