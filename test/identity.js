import { describe, it } from 'mocha'
import { expect } from 'chai'
import { identity } from '../src'

describe('#identity', () => {
  it('should return its argument', () => {
    expect(identity(500)).to.equal(500)
    expect(identity('text')).to.equal('text')
  })
})
