import { describe, it } from 'mocha'
import { expect } from 'chai'
import { flatten } from '../src'

describe('#flatten', () => {
  it('should return the element of a 1-member set', () => {
    expect(
      flatten(['member'])
    ).to.equal('member')
  })
})
