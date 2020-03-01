import { describe, it } from 'mocha'
import { expect } from 'chai'
import { typeIs } from '../src'

describe('#typeIs', () => {
  describe('type: array', () => {
    const type = 'array'

    it('should return true if the value is of the specified type', () => {
      expect(typeIs({ type, value: [] })).to.equal(true)
      expect(typeIs({ type, value: 'a' })).to.equal(false)
    })
  })

  describe('type: number', () => {
    const type = 'number'

    it('should return true if the value is of the specified type', () => {
      expect(typeIs({ type, value: 1 })).to.equal(true)
      expect(typeIs({ type, value: 'a' })).to.equal(false)
    })
  })

  describe('type: string', () => {
    const type = 'string'

    it('should return true if the value is of the specified type', () => {
      expect(typeIs({ type, value: 'a' })).to.equal(true)
      expect(typeIs({ type, value: 1 })).to.equal(false)
    })
  })
})
