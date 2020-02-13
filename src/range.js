import addOne from './addOne'
import conditional from './conditional'
import strictlyEquals from './strictlyEquals'
import subtractOne from './subtractOne'
import tail from './tail'
import until from './until'

const range = ({
  maximum,
  minimum = 0
}) => conditional({
  ifFalse: () => until({
    initialValue: [minimum],
    predicate: x => strictlyEquals(
      subtractOne(maximum),
      tail(x)
    ),
    transform: x => [
      ...x,
      addOne(
        tail(x)
      )
    ]
  }),
  ifTrue: () => [minimum],
  predicate: () => strictlyEquals(
    maximum,
    addOne(minimum)
  )
})

export default range
