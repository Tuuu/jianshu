// import * as actionTypes from '../store/actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  title: 'TitleTitleTitleTitleTitle',
  content: `
    <img src="https://picsum.photos/500/300/?image=528" alt="" />
    <p>
      ContentContentContentContentContentContentContentContentContentContentContentContentContentContentContent
    </p>
    <p>
      ContentContentContentContentContentContentContentContentContentContentContentContentContentContentContent
    </p>`,
})

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
