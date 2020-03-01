import { describe, it } from 'mocha'
import { expect } from 'chai'
import { type } from '../src'

describe('#type', () => {
  it('should return the type of its parameter', () => {
    expect(type(1)).to.equal('number')
    expect(type('')).to.equal('string')
  })

  it('should handle additional types')
})
