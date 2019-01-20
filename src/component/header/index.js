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
  // 需要显示的10条热门搜索
  const searchTrendingPageList = props.searchTrendingList.slice((props.currentPage - 1) * 10, props.currentPage * 10)
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
            {props.focus || props.mouseEnter ? (
              <SearchTips onMouseEnter={props.handleMouseEnter} onMouseLeave={props.handleMouseLeave}>
                <SearchTrending>
                  <div className="trending-title">
                    <SearchTrendingTitle>热门搜索</SearchTrendingTitle>
                    <SearchTrendingSwitch onClick={() => props.handleChangePage(props.currentPage, props.totalPage)}>
                      换一批
                    </SearchTrendingSwitch>
                  </div>
                  <div className="trending-wrap">
                    {props.searchTrendingList.length > 0 &&
                      searchTrendingPageList.map(item => {
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
    mouseEnter: state.getIn(['header', 'mouseEnter']),
    searchTrendingList: state.getIn(['header', 'searchTrendingList']).toJS(), // immutable 类型转换成普通类型
    currentPage: state.getIn(['header', 'currentPage']),
    totalPage: state.getIn(['header', 'totalPage']),
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
    handleMouseEnter () {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave () {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage (currentPage, totalPage) {
      currentPage = currentPage < totalPage ? currentPage + 1 : 1
      dispatch(actionCreators.changePage(currentPage))
    },
  }
}

Header.propTypes = {
  focus: PropTypes.bool,
  mouseEnter: PropTypes.bool,
  handleFocus: PropTypes.func,
  handleBlur: PropTypes.func,
  handleMouseEnter: PropTypes.func,
  handleMouseLeave: PropTypes.func,
  searchTrendingList: PropTypes.array,
  currentPage: PropTypes.number,
  totalPage: PropTypes.number,
  handleChangePage: PropTypes.func,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
