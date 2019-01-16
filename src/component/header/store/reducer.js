import * as actionTypes from './actionTypes'

const defaultState = {
  focus: false,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      return {
        focus: true,
      }
    case actionTypes.SEARCH_BLUR:
      return {
        focus: false,
      }
    default:
      break
  }
  return state
}
