import { describe, it } from 'mocha'
import { expect } from 'chai'
import { values } from '../src'

describe('#values', () => {
  it('should return the values of an object', () => {
    expect(
      values({
        a: 20,
        b: 40,
        c: 65
      })
    ).to.have.members([20, 40, 65])
  })
})
