import { combineReducers } from 'redux'
import headerReducer from '../component/header/store/reducer'

const reducer = combineReducers({
  header: headerReducer,
})

export default reducer
