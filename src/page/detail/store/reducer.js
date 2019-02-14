import * as actionTypes from '../store/actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  title: '',
  content: '',
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_DETAIL:
      return state.merge({
        title: action.data.title,
        content: action.data.content,
      })
    default:
      return state
  }
}
