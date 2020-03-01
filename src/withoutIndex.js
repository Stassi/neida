import addOne from './addOne'
import slice from './slice'

const withoutIndex = ({ collection, index }) => [
  ...slice({
    collection,
    end: index
  }),
  ...slice({
    collection,
    start: addOne(index)
  })
]

export default withoutIndex
