// 主页
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Topic from './component/Topic'
import List from './component/List'
import Recommend from './component/Recommend'
import Writer from './component/Writer'
import { HomeWrapper, HomeLeft, HomeRight } from './style'
import { actionCreator } from './store'

class Home extends Component {
  componentDidMount () {
    this.props.changeHomeData()
  }
  render () {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="http://picsum.photos/1250/540/?image=191" alt="" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
      </HomeWrapper>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  changeHomeData () {
    const action = actionCreator.getHomeData()
    dispatch(action)
  },
})

Home.propTypes = {
  changeHomeData: PropTypes.func,
}

export default connect(
  null,
  mapDispatchToProps
)(Home)
