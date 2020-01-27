import conditional from './conditional'

const spliceOne = ({
  data,
  index,
  item,
  withRemoved
}) => {
  const removed = data.splice(
    index,
    1,
    item
  )

  return conditional({
    ifFalse: () => data,
    ifTrue: () => ({
      data,
      removed
    }),
    predicate: () => withRemoved
  })
}

export default spliceOne
