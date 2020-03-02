import add from './add'
import negate from './negate'

/**
 * @description Decrement value by 1.
 * @example
 * subtractOne(5)
 * // => 4
 * @module
 * @param {number} n
 * @returns {number} value decremented by 1
 * @see {@link addOne}
 */
export default function subtractOne (n) {
  // TODO: Rename as #decrement
  return add(n, negate(1))
}
