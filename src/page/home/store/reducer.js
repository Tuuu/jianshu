import * as actionTypes from '../store/actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: [],
  pageNum: 0,
  isLoading: false,
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return action.data
    case actionTypes.GET_MORE_ARTICLE_LIST:
      return state.merge({
        articleList: state.get('articleList').concat(action.data),
        pageNum: action.nextPage,
      })
    case actionTypes.LOADING_STATE:
      return state.set('isLoading', !state.get('isLoading'))
    default:
      return state
  }
}
