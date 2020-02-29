import { describe, it } from 'mocha'
import { expect } from 'chai'
import { flatten } from '../src'

describe('#flatten', () => {
  describe('once-nested array', () => {
    it('should return a non-nested array of all members including nested', () => {
      expect(
        flatten([
          'a',
          ['m', 'n'],
          'r',
          ['y', 'z']
        ])
      ).to.have.ordered.members([
        'a',
        'm',
        'n',
        'r',
        'y',
        'z'
      ])
    })
  })

  describe('multi-nested array', () => {
    it('should return a non-nested array of all members including recursive nested')
  })
})
