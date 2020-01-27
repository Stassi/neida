import { describe, it } from 'mocha'
import { expect } from 'chai'
import { addOne } from '../src'

describe('#addOne', () => {
  it('can perform basic addition', () => {
    expect(addOne(3)).to.equal(4)
    expect(addOne(4)).to.equal(5)
  })
})
