const duplicate = ({ length, value }) => Array.from(
  { length },
  () => value
)

export default duplicate
