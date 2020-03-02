import add from './add'
import length from './length'
import slice from './slice'
import strictEqual from './strictEqual'
import until from './until'

/**
 * @description Any type.
 * @typedef {*} Any
 */

/**
 * @description Group elements into fixed-length chunks.
 * @example
 * chunk({
 *   collection: ['a', 'b', 'c', 'd', 'e', 'f'],
 *   length: 2
 * })
 * // => [
 * //  ['a', 'b'],
 * //  ['c', 'd'],
 * //  ['e', 'f']
 * // ]
 * @module
 * @param {Object} x
 * @param {Any[]} x.collection
 * @param {number} x.length
 * @returns {Any[][]} fixed-length chunks
 */
export default function chunk ({ collection, length: chunkLength }) {
  const addChunkLength = x => add(x, chunkLength)

  const initialStart = 0

  return until({
    initialValue: {
      end: addChunkLength(initialStart),
      results: [],
      start: initialStart
    },
    predicate: ({ start }) => strictEqual(
      start,
      length(collection)
    ),
    transform: ({
      end,
      results,
      start
    }) => ({
      end: addChunkLength(end),
      results: [
        ...results,
        slice({
          collection,
          end,
          start
        })
      ],
      start: addChunkLength(start)
    })
  }).results
}
