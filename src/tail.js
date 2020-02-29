import flatten from './flatten'
import negate from './negate'
import slice from './slice'

const tail = collection => flatten(
  slice({
    collection,
    start: negate(1)
  })
)

export default tail
