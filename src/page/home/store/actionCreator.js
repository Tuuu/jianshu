import axios from 'axios'
import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const changeHomeData = data => ({
  type: actionTypes.CHANGE_HOME_DATA,
  data: fromJS(data),
})

const getMoreArticleList = (data, nextPage) => ({
  type: actionTypes.GET_MORE_ARTICLE_LIST,
  data: fromJS(data),
  nextPage,
})

const changeLoadingState = () => ({
  type: actionTypes.LOADING_STATE,
})

const getHomeData = () => {
  return dispatch => {
    axios
      .get('https://www.easy-mock.com/mock/5c403cb5f9530c0a253d8b0c/jianshu/home_data')
      .then(res => {
        dispatch(changeHomeData(res.data.data))
      })
      .catch(res => {
        console.log(res)
      })
  }
}

const getArticleList = pageNum => {
  return dispatch => {
    dispatch(changeLoadingState())
    axios
      .get(`https://www.easy-mock.com/mock/5c403cb5f9530c0a253d8b0c/jianshu/article_list?pageNum=${pageNum + 1}`)
      .then(res => {
        console.log(res)
        dispatch(changeLoadingState())
        dispatch(getMoreArticleList(res.data.data.articleList, pageNum + 1))
      })
      .catch(res => {
        dispatch(changeLoadingState())
        console.log(res)
      })
  }
}

export { getHomeData, getArticleList }
