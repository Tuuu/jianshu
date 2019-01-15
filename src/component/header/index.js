import React, { Component } from 'react'
import { HeaderWrapper, Logo, NavItem, StyleMode, LoginIn, SignUp, Write, Search, SearchWrapper } from './style'

class Header extends Component {
  render () {
    return (
      <HeaderWrapper>
        <Logo href="/" />
        <nav className="nav-ct">
          <NavItem className="active">首页</NavItem>
          <NavItem>下载App</NavItem>
          <SearchWrapper>
            <Search placeholder="搜索" />
            <i className="iconfont">&#xe648;</i>
          </SearchWrapper>
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
