import { describe, it } from 'mocha'
import { expect } from 'chai'
import { toObject } from '../src'

describe('#toObject', () => {
  it('should convert an array to an object', () => {
    expect(
      toObject([
        ['delta', 'gamma'],
        ['tango', 'sierra']
      ])
    ).to.deep.equal({
      delta: 'gamma',
      tango: 'sierra'
    })
  })
})
