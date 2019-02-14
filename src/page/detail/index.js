// 主页
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { DetailWrapper, Title, Content } from './style'

class Detail extends Component {
  componentDidMount () {}
  render () {
    return (
      <DetailWrapper>
        <Title>{this.props.title}</Title>
        <Content dangerouslySetInnerHTML={{ __html: this.props.content }} />
      </DetailWrapper>
    )
  }
}

const mapStateToProps = state => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content']),
})

Detail.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
}

export default connect(
  mapStateToProps,
  null
)(Detail)
