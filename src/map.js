const map = ({
  collection,
  // TODO: Remove
  data = collection,
  transform
}) => data.map(transform)

export default map
