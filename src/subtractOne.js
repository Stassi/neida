import add from './add'
import negate from './negate'

// TODO: Rename as #decrement

/**
 * @description Decrement value by 1.
 * @example
 * subtractOne(5)
 * // => 4
 * @module
 * @param {number} x
 * @returns {number} x decremented by 1
 * @see {@link addOne}
 */
const subtractOne = x => add(
  x,
  negate(1)
)

export default subtractOne
