// 主页
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { RecommendItem } from '../style'

class Recommend extends Component {
  render () {
    return (
      <div>
        {this.props.recommendList.map(item => (
          <RecommendItem key={item.id} imgUrl={item.imgUrl}>
            {item.content}
          </RecommendItem>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  recommendList: state.getIn(['home', 'recommendList']).toJS(),
})

Recommend.propTypes = {
  recommendList: PropTypes.array,
}

export default connect(
  mapStateToProps,
  null
)(Recommend)
