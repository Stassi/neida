import strictEqual from './strictEqual'

const isNumber = x => strictEqual(
  'number',
  typeof x
)

export default isNumber
