import addOne from './addOne'
import conditional from './conditional'
import strictEqual from './strictEqual'
import subtractOne from './subtractOne'
import tail from './tail'
import until from './until'

const range = ({
  maximum,
  minimum = 0
}) => conditional({
  ifFalse: () => conditional({
    ifFalse: () => until({
      initialValue: [minimum],
      predicate: x => strictEqual(
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
    predicate: () => strictEqual(
      maximum,
      addOne(minimum)
    )
  }),
  ifTrue: () => [],
  predicate: () => strictEqual(
    maximum,
    minimum
  )
})

export default range
