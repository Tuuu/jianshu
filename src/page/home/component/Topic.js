// 主页的主题组件
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { TopicWrapper, TopicItem } from '../style'

class Topic extends Component {
  render () {
    return (
      <TopicWrapper>
        {this.props.topicList.map(item => (
          <TopicItem key={item.id}>
            <img src={item.imgUrl} alt="" />
            <span>{item.title}</span>
          </TopicItem>
        ))}
      </TopicWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    topicList: state.getIn(['home', 'topicList']).toJS(),
  }
}

Topic.propTypes = {
  topicList: PropTypes.array,
}

export default connect(
  mapStateToProps,
  null
)(Topic)
