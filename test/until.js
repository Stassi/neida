import { describe, it } from 'mocha'
import { expect } from 'chai'
import { until } from '../src'

describe('#until', () => {
  it('should return the looped value once the predicate is satisfied', () => {
    expect(
      until({
        initialValue: ({ count: 2 }),
        predicate: ({ count }) => count === -2,
        transform: ({ count }) => ({ count: count - 1 })
      }).count
    ).to.equal(-2)
  })
})
