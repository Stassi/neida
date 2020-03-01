import { describe, it } from 'mocha'
import { expect } from 'chai'
import { zip } from '../src'

describe('#zip', () => {
  const letters = ['a', 'b', 'c', 'd']
  const numbers = [10, 20, 30, 40]

  describe('2 rows of 4 columns', () => {
    it('should merge into 4 rows of 2 columns', () => {
      expect(
        zip(letters, numbers)
      ).to.have.deep.ordered.members([
        ['a', 10],
        ['b', 20],
        ['c', 30],
        ['d', 40]
      ])
    })
  })

  describe('3 rows of 4 columns', () => {
    it('should merge into 4 rows of 3 columns', () => {
      expect(
        zip(letters, numbers, letters)
      ).to.have.deep.ordered.members([
        ['a', 10, 'a'],
        ['b', 20, 'b'],
        ['c', 30, 'c'],
        ['d', 40, 'd']
      ])
    })
  })
})
