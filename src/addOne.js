import add from './add'

/**
 * @description Increment value by 1.
 * @example
 * addOne(5)
 * // => 6
 * @module
 * @param {number} x
 * @returns {number} x incremented by 1
 * @see {@link add}
 * @see {@link subtractOne}
 */
export default function addOne (x) {
  // TODO: Rename as #increment
  return add(x, 1)
}
