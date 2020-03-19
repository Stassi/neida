import add from './add'
import reduce from './reduce'

/**
 * @description Sum multiple values.
 * @example
 * sum(2, 3, 5)
 * // => 10
 * @module
 * @param {...number} n
 * @returns {number} sum of arguments
 * @see {@link add}
 */
const sum = (...n) => reduce({
  collection: n,
  initialValue: 0,
  reducer: add
})

export default sum
