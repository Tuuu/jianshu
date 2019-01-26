import axios from 'axios'
import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const changeHomeData = data => ({
  type: actionTypes.CHANGE_HOME_DATA,
  data: fromJS(data),
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

export { getHomeData }
