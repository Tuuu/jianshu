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
  articleList: [
    {
      id: 1,
      title: '大学里可以考的证',
      content: '1、英语四六级证 英语四六级是每个大学生都要面对的，但有些单位招人，要求必须过英语四级',
      imgUrl: 'http://picsum.photos/300/200/?image=448',
    },
    {
      id: 2,
      title: '目标管理｜2018年44周计划及回顾',
      content:
        '周计划的制定方法见：目标制定方法中的周度目标制定，所有内容均按照逆向书写，即：查看顺序是从后往前看。 基本情况：2018年第 44周 | 181...',
      imgUrl: 'http://picsum.photos/300/200/?image=449',
    },
    {
      id: 3,
      title: '想起一些往事',
      content:
        '退一步，未必海阔天空 一转身，也可能是万丈深渊 繁花褪却，落叶归林 一场大雪，一场沉寂 你可曾听见沉寂深处的声音 跪着听吧，耳朵贴于地面 春流是...',
      imgUrl: 'http://picsum.photos/300/200/?image=450',
    },
  ],
})

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
