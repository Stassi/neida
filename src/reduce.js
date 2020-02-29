const reduce = ({
  collection,
  initialValue,
  reducer
}) => collection.reduce(
  reducer,
  initialValue
)

export default reduce
