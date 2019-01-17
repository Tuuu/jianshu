import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import {
  HeaderWrapper,
  Logo,
  NavItem,
  StyleMode,
  LoginIn,
  SignUp,
  Write,
  Search,
  SearchWrapper,
  SearchTips,
  SearchTrending,
  SearchTrendingTitle,
  SearchTrendingSwitch,
  SearchTrendingItem,
} from './style'
import { actionCreators } from './store'

const Header = props => {
  return (
    <HeaderWrapper>
      <Logo href="/" />
      <nav className="nav-ct">
        <NavItem className="active">首页</NavItem>
        <NavItem>下载App</NavItem>
        <CSSTransition in={props.focus} timeout={300} classNames="focused">
          <SearchWrapper>
            <Search placeholder="搜索" onFocus={props.handleFocus} onBlur={props.handleBlur} />
            <i className={props.focus ? 'iconfont focused' : 'iconfont'}>&#xe648;</i>
            {props.focus ? (
              <SearchTips>
                <SearchTrending>
                  <div className="trending-title">
                    <SearchTrendingTitle>热门搜索</SearchTrendingTitle>
                    <SearchTrendingSwitch>换一批</SearchTrendingSwitch>
                  </div>
                  <div className="trending-wrap">
                    {props.searchTrendingList.map(item => {
                      return <SearchTrendingItem key={item}>{item}</SearchTrendingItem>
                    })}
                  </div>
                </SearchTrending>
              </SearchTips>
            ) : (
              ''
            )}
          </SearchWrapper>
        </CSSTransition>
      </nav>
      <StyleMode className="btn">Aa</StyleMode>
      <LoginIn className="btn">登录</LoginIn>
      <SignUp className="btn">注册</SignUp>
      <Write className="btn">
        <i className="iconfont">&#xe61b;</i>写文章
      </Write>
    </HeaderWrapper>
  )
}

const mapStateToProps = state => {
  return {
    focus: state.getIn(['header', 'focus']), // reducer 拆分
    searchTrendingList: state.getIn(['header', 'searchTrendingList']).toJS(), // immutable 类型转换成普通类型
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleFocus () {
      dispatch(actionCreators.getSearchTrending())
      dispatch(actionCreators.searchFocus())
    },
    handleBlur () {
      dispatch(actionCreators.searchBlur())
    },
  }
}

Header.propTypes = {
  focus: PropTypes.bool,
  handleFocus: PropTypes.func,
  handleBlur: PropTypes.func,
  searchTrendingList: PropTypes.array,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
