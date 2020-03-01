import length from './length'
import map from './map'
import strictEqual from './strictEqual'

const equalLengths = (...collection) => strictEqual(
  ...map({
    collection,
    transform: length
  })
)

export default equalLengths
