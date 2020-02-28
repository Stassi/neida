import { describe, it } from 'mocha'
import { expect } from 'chai'
import { reduce } from '../src'

describe('#reduce', () => {
  it('should iteratively transform a set', () => {
    expect(
      reduce({
        collection: 'olleH'.split(''),
        initialValue: '',
        reducer: (accumulator, value) => `${value}${accumulator}`
      })
    ).to.equal('Hello')
  })
})
