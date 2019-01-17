// action 创建函数

import * as actionTypes from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'

const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS,
})

const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR,
})

const changeSearchTrending = (data) => ({
  type: actionTypes.SEARCH_TRENDING,
  data: fromJS(data), // 转换为 immutable 数据类型
})

// 异步 action 使用 redux-thunk
const getSearchTrending = () => {
  return dispatch => {
    axios
      .get('https://www.easy-mock.com/mock/5c403cb5f9530c0a253d8b0c/jianshu/trending_search')
      .then(res => {
        const data = res.data.data
        dispatch(changeSearchTrending(data))
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export { searchFocus, searchBlur, getSearchTrending }
