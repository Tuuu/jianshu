// 主页
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { WriterTitle, WriterItem } from '../style'

class Writer extends Component {
  render () {
    return (
      <div>
        <WriterTitle>推荐作者</WriterTitle>
        {this.props.writerList.map(item => (
          <WriterItem key={item.id}>
            <img src={item.avatarUrl} alt="" className="writer-avatar" />
            <div>
              <h3 className="writer-name">{item.name}</h3>
              <p className="writer-info">
                写了{item.writerNum}k字 · {item.likeNum}k喜欢
              </p>
            </div>
          </WriterItem>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  writerList: state.getIn(['home', 'writerList']).toJS(),
})

Writer.propTypes = {
  writerList: PropTypes.array,
}

export default connect(
  mapStateToProps,
  null
)(Writer)
