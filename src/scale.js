import add from './add'
import multiply from './multiply'
import negate from './negate'

const scale = ({
  interval,
  maximum,
  minimum
}) => add(
  minimum,
  multiply(
    interval,
    add(
      maximum,
      negate(minimum)
    )
  )
)

export default scale
