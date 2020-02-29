import { describe, it } from 'mocha'
import { expect } from 'chai'
import { isNumber } from '../src'

describe('#isNumber', () => {
  it('should return true if the parameter is a number', () => {
    expect(isNumber(1)).to.equal(true)
    expect(isNumber('a')).to.equal(false)
  })
})
