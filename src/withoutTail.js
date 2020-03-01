import negate from './negate'
import slice from './slice'

const withoutTail = collection => slice({
  collection,
  end: negate(1)
})

export default withoutTail
