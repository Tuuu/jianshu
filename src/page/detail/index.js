// 主页
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { DetailWrapper, Title, Content } from './style'
import { actionCreator } from './store'

class Detail extends Component {
  componentDidMount () {
    this.props.getDetail(this.props.match.params.id)
  }
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

const mapDispatchToProps = dispatch => ({
  getDetail (id) {
    dispatch(actionCreator.getDetail(id))
  },
})

Detail.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  getDetail: PropTypes.func,
  match: PropTypes.object,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail)
