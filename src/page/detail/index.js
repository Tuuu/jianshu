// 主页
import React, { Component } from 'react'
import { DetailWrapper, Title, Content } from './style'

class Detail extends Component {
  componentDidMount () {}
  render () {
    return (
      <DetailWrapper>
        <Title>TitleTitleTitleTitleTitle</Title>
        <Content>
          <img src="https://picsum.photos/500/300/?image=528" alt="" />
          <p>
            ContentContentContentContentContentContentContentContentContentContentContentContentContentContentContent
          </p>
          <p>
            ContentContentContentContentContentContentContentContentContentContentContentContentContentContentContent
          </p>
          <p>
            ContentContentContentContentContentContentContentContentContentContentContentContentContentContentContent
          </p>
        </Content>
      </DetailWrapper>
    )
  }
}

export default Detail
