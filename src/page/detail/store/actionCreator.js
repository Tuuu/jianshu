import axios from 'axios'
import * as actionTypes from './actionTypes'

const changeDetail = data => ({
  type: actionTypes.GET_DETAIL,
  data,
})

export const getDetail = id => {
  return dispatch => {
    axios
      .get(`https://www.easy-mock.com/mock/5c403cb5f9530c0a253d8b0c/jianshu/detail?id=${id}`)
      .then(res => {
        dispatch(changeDetail(res.data.data))
      })
      .catch(res => {
        console.log(res)
      })
  }
}
