import * as actionTypes from '../store/actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: [],
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return action.data
    default:
      return state
  }
}
