import head from './head'
import negate from './negate'
import slice from './slice'

const tail = collection => head(
  slice({
    collection,
    start: negate(1)
  })
)

export default tail
