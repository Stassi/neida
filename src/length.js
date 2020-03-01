import conditional from './conditional'
import or from './or'
import properties from './properties'
import typeIs from './typeIs'

const length = value => conditional({
  ifFalse: () => properties(value),
  ifTrue: () => value,
  predicate: () => or(
    () => typeIs({ value, type: 'array' }),
    () => typeIs({ value, type: 'string' })
  )
}).length

export default length
