import conditional from './conditional'
import lessThan from './lessThan'

const minimum = ({ lowest, value }) => conditional({
  ifFalse: () => lowest,
  ifTrue: () => value,
  predicate: () => lessThan({
    highest: value,
    value: lowest
  })
})

export default minimum
