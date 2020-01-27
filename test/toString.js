import { describe, it } from 'mocha'
import { expect } from 'chai'
import { toString } from '../src'

describe('#toString', () => {
  it('should convert an array to a string', () => {
    expect(toString(['H', 'i'])).to.equal('Hi')
  })
})
