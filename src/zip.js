import map from './map'
import reduce from './reduce'

const zip = (arrayHead, ...arrayRest) => map({
  collection: arrayHead,
  transform: (headElement, headIndex) => reduce({
    collection: arrayRest,
    initialValue: [headElement],
    reducer: (accumulator, currentArray) => [
      ...accumulator,
      currentArray[headIndex]
    ]
  })
})

export default zip
