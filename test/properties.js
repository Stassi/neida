import { describe, it } from 'mocha'
import { expect } from 'chai'
import { properties } from '../src'

describe('#properties', () => {
  it('should return the properties of an object', () => {
    expect(
      properties({
        a: 20,
        b: 40,
        c: 65
      })
    ).to.have.members(['a', 'b', 'c'])
  })
})
