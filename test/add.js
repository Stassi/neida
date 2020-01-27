import { describe, it } from 'mocha'
import { expect } from 'chai'
import { add } from '../src'

describe('#add', () => {
  it('can perform basic addition', () => {
    expect(add(3, 4)).to.equal(7)
  })
})
