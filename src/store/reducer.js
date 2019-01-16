const defaultState = {
  focus: false,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SEARCH_FOCUS':
      return {
        focus: true,
      }
    case 'SEARCH_BLUR':
      return {
        focus: false,
      }
    default:
      break
  }
  return state
}
