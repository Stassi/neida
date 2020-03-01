import conditional from './conditional'
import strictEqual from './strictEqual'

const typeIs = ({ type, value }) => conditional({
  ifFalse: () => strictEqual(type, typeof value),
  ifTrue: () => Array.isArray(value),
  predicate: () => strictEqual(type, 'array')
})

export default typeIs
