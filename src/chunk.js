import add from './add'
import length from './length'
import slice from './slice'
import strictlyEquals from './strictlyEquals'
import until from './until'

const chunk = ({
  collection,
  length: chunkLength
}) => {
  const addChunkLength = x => add(x, chunkLength)

  const initialStart = 0

  return until({
    initialValue: {
      end: addChunkLength(initialStart),
      results: [],
      start: initialStart
    },
    predicate: ({ start }) => strictlyEquals(
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

export default chunk
