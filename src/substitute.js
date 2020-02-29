import addOne from './addOne'
import slice from './slice'

const substitute = ({
  collection,
  index,
  item
}) => [
  ...slice({
    collection,
    end: index
  }),
  item,
  ...slice({
    collection,
    start: addOne(index)
  })
]

export default substitute
