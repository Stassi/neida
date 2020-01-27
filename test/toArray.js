import { describe, it } from 'mocha'
import { expect } from 'chai'
import { toArray } from '../src'

describe('#toArray', () => {
  it('should convert a string to an array', () => {
    expect(toArray('Hello')).to.have.members(
      ['H', 'e', 'l', 'l', 'o']
    )
  })
})
