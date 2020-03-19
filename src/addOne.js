import add from './add'

/**
 * @description Increment value by 1.
 * @example
 * addOne(5)
 * // => 6
 * @module
 * @param {number} n
 * @returns {number} value incremented by 1
 * @see {@link add}
 * @see {@link subtractOne}
 */
export default function addOne (n) {
  // TODO: Rename as #increment
  return add(n, 1)
}
