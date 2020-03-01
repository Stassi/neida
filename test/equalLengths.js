import { describe, it } from 'mocha'
import { expect } from 'chai'
import { equalLengths } from '../src'

describe('#equalLengths', () => {
  describe('with array', () => {
    const arrayOne = ['a', 'b', 'c']

    describe('compared to array of same length', () => {
      const arrayTwo = ['d', 'e', 'f']

      it('should return true', () => {
        expect(
          equalLengths(arrayOne, arrayTwo)
        ).to.equal(true)
      })
    })

    describe('compared to array of different length', () => {
      const arrayTwo = ['d', 'e', 'f', 'g', 'h', 'i']

      it('should return false', () => {
        expect(
          equalLengths(arrayOne, arrayTwo)
        ).to.equal(false)
      })
    })

    describe('compared to object of same length', () => {
      const objectOne = { a: 20, b: 40, c: 80 }

      it('should return true', () => {
        expect(
          equalLengths(arrayOne, objectOne)
        ).to.equal(true)
      })
    })

    describe('compared to string of same length', () => {
      const stringOne = 'ook'

      it('should return true', () => {
        expect(
          equalLengths(arrayOne, stringOne)
        ).to.equal(true)
      })
    })
  })
})
