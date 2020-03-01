import { describe, it } from 'mocha'
import { expect } from 'chai'
import { empty } from '../src'

describe('#empty', () => {
  describe('array', () => {
    describe('is empty', () => {
      const collection = []

      it('should return true', () => {
        expect(empty(collection)).to.equal(true)
      })
    })

    describe('is not empty', () => {
      const collection = ['a', 'b', 'c', 'd']

      it('should return false', () => {
        expect(empty(collection)).to.equal(false)
      })
    })
  })

  describe('object', () => {
    describe('is empty', () => {
      const collection = {}

      it('should return true', () => {
        expect(empty(collection)).to.equal(true)
      })
    })

    describe('is not empty', () => {
      const collection = { a: 15, b: 25 }

      it('should return false', () => {
        expect(empty(collection)).to.equal(false)
      })
    })
  })

  describe('string', () => {
    describe('is empty', () => {
      const collection = ''

      it('should return true', () => {
        expect(empty(collection)).to.equal(true)
      })
    })

    describe('is not empty', () => {
      const collection = 'not empty'

      it('should return false', () => {
        expect(empty(collection)).to.equal(false)
      })
    })
  })
})
