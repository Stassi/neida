import substitute from './substitute'

// TODO: Remove
const spliceOne = ({ data: collection, ...props }) => {
  console.warn('[neida] deprecated method #spliceOne replaced by #substitute')

  return substitute({ collection, ...props })
}

export default spliceOne
