import { describe, it } from 'mocha'
import { expect } from 'chai'
import { subtractOne } from '../src'

describe('#subtractOne', () => {
  it('should subtract 1 from the argument', () => {
    expect(subtractOne(4)).to.equal(3)
    expect(subtractOne(0)).to.equal(-1)
    expect(subtractOne(-9)).to.equal(-10)
  })
})
