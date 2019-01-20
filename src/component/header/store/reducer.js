import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focus: false, // 搜索框是否聚焦
  mouseEnter: false, // 鼠标是否进入热门搜索
  searchTrendingList: [], // 热搜列表项
  currentPage: 1, // 热门搜索的当前页码
  totalPage: 1, // 全部页码
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set('focus', true)
    case actionTypes.SEARCH_BLUR:
      return state.set('focus', false)
    case actionTypes.SEARCH_TRENDING:
      return state.merge({
        searchTrendingList: action.data,
        totalPage: action.totalPage,
      })
    case actionTypes.MOUSE_ENTER:
      return state.set('mouseEnter', true)
    case actionTypes.MOUSE_LEAVE:
      return state.set('mouseEnter', false)
    case actionTypes.CHANGE_PAGE:
      return state.set('currentPage', action.currentPage)
    default:
      return state
  }
}
