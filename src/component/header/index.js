import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { HeaderWrapper, Logo, NavItem, StyleMode, LoginIn, SignUp, Write, Search, SearchWrapper } from './style'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      focus: false,
    }
    this.handleToggle = this.handleToggle.bind(this)
  }
  handleToggle () {
    this.setState({
      focus: !this.state.focus,
    })
  }
  render () {
    return (
      <HeaderWrapper>
        <Logo href="/" />
        <nav className="nav-ct">
          <NavItem className="active">首页</NavItem>
          <NavItem>下载App</NavItem>
          <CSSTransition in={this.state.focus} timeout={300} classNames="focused">
            <SearchWrapper>
              <Search placeholder="搜索" onFocus={this.handleToggle} onBlur={this.handleToggle} />
              <i className={this.state.focus ? 'iconfont focused' : 'iconfont'}>&#xe648;</i>
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
}

export default Header
