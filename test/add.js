import { describe, it } from 'mocha'
import { expect } from 'chai'
import { add } from '../src'

describe('#add', () => {
  it('should perform basic addition', () => {
    expect(add(3, 4)).to.equal(7)
    expect(add(4, 3)).to.equal(7)
  })
})
