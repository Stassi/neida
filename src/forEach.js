import entries from './entries'

const forEach = ({
  collection,
  callback
}) => entries(collection)
  .forEach(callback)

export default forEach
