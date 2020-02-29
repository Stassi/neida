import { describe, it } from 'mocha'
import { expect } from 'chai'
import { head } from '../src'

describe('#head', () => {
  it('should return the first element of an array', () => {
    expect(
      head(['a', 'b', 'c'])
    ).to.equal('a')
  })
})
