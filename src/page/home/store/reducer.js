import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: '手绘',
      imgUrl: 'http://picsum.photos/64/64/?image=939',
    },
    {
      id: 2,
      title: '故事',
      imgUrl: 'http://picsum.photos/64/64/?image=940',
    },
    {
      id: 3,
      title: '读书',
      imgUrl: 'http://picsum.photos/64/64/?image=941',
    },
    {
      id: 4,
      title: '故事读书',
      imgUrl: 'http://picsum.photos/64/64/?image=942',
    },
  ],
})

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
