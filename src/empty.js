import length from './length'
import strictEqual from './strictEqual'

const empty = x => strictEqual(
  length(x),
  0
)

export default empty
