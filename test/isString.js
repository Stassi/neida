import { describe, it } from 'mocha'
import { expect } from 'chai'
import { isString } from '../src'

describe('#isString', () => {
  it('should return true if the parameter is a number', () => {
    expect(isString('a')).to.equal(true)
    expect(isString(1)).to.equal(false)
  })
})
