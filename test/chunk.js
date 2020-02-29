import { describe, it } from 'mocha'
import { expect } from 'chai'
import { chunk } from '../src'

describe('#chunk', () => {
  describe('collection: {a...f}', () => {
    const collection = ['a', 'b', 'c', 'd', 'e', 'f']

    describe('length: 2', () => {
      const length = 2

      it('should return 3 rows of 2-length pairs', () => {
        expect(
          chunk({ collection, length })
        ).to.have.deep.ordered.members([
          ['a', 'b'],
          ['c', 'd'],
          ['e', 'f']
        ])
      })
    })

    describe('length: 3', () => {
      const length = 3

      it('should return 2 rows of 3-length pairs', () => {
        expect(
          chunk({ collection, length })
        ).to.have.deep.ordered.members([
          ['a', 'b', 'c'],
          ['d', 'e', 'f']
        ])
      })
    })
  })
})
