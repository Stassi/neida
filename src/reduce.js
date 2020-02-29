const reduce = ({
  collection,
  // TODO: Remove
  data = collection,
  initialValue,
  reducer
}) => data.reduce(
  reducer,
  initialValue
)

export default reduce
