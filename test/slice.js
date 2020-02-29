import { describe, it } from 'mocha'
import { expect } from 'chai'
import { slice } from '../src'

describe('#slice', () => {
  describe('collection: {a...f}', () => {
    const collection = ['a', 'b', 'c', 'd', 'e', 'f']

    describe('start: 0', () => {
      const start = 0

      describe('end: -1', () => {
        const end = -1

        it('should omit the last element in the returned array', () => {
          expect(
            slice({
              collection,
              end,
              start
            })
          ).to.have.ordered.members([
            'a',
            'b',
            'c',
            'd',
            'e'
          ])
        })
      })

      describe('end: 0', () => {
        const end = 0

        it('should return an empty array', () => {
          expect(
            slice({
              collection,
              end,
              start
            })
          ).to.have.ordered.members([])
        })
      })

      describe('end: 1', () => {
        const end = 1

        it('should include only the first element in the returned array', () => {
          expect(
            slice({
              collection,
              end,
              start
            })
          ).to.have.ordered.members(['a'])
        })
      })
    })

    describe('start: 1', () => {
      const start = 1

      describe('end: 2', () => {
        const end = 2

        it('should include only the second element in the returned array', () => {
          expect(
            slice({
              collection,
              end,
              start
            })
          ).to.have.ordered.members(['b'])
        })
      })
    })
  })
})
