import strictEqual from './strictEqual'

const typeIs = ({
  value,
  type: typeInput
}) => strictEqual(
  typeInput,
  typeof value
)

export default typeIs
