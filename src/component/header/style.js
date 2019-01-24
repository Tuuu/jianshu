import styled from 'styled-components'
import logo from '../../assets/nav-logo.png'

const themeColor = '#ea6f5a'
const hoverColor = '#ec6149'

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 58px;
  display: flex;
  align-items: center;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
  & a {
    display: block;
  }
  & .nav-ct {
    margin-left: 60px;
    display: flex;
    align-items: center;
    flex-grow: 1;
  }
  & .btn {
    padding: 6px 12px;
    line-height: 24px;
    text-align: center;
    cursor: pointer;
  }
`

const Logo = styled.a`
  width: 100px;
  height: 100%;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;
`

const NavItem = styled.a`
  margin-right: 10px;
  padding: 0 15px;
  font-size: 17px;
  line-height: 56px;
  color: #333;
  &:hover {
    background-color: #f5f5f5;
  }
  &.active {
    color: ${themeColor};
    background: none;
  }
`

const SearchWrapper = styled.div`
  position: relative;
  margin-left: 15px;
  width: 160px;
  & i {
    position: absolute;
    padding: 4px 5px 4px 5px;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    color: #999;
    border-radius: 50%;
    cursor: pointer;
    &.focused {
      color: #fff;
      background: #777;
    }
  }
  &.focused-enter {
    transition: all 0.3s ease-in-out;
  }
  &.focused-enter-active {
    width: 240px;
  }
  &.focused-enter-done {
    width: 240px;
  }
  &.focused-exit {
    transition: all 0.2s ease-in-out;
  }
  &.focused-exit-done {
    width: 160px;
  }
`

const Search = styled.input`
  padding-left: 20px;
  padding-right: 40px;
  width: 100%;
  height: 38px;
  font-size: 14px;
  color: #333;
  border: 1px solid #eee;
  outline: none;
  border-radius: 20px;
  background: #eee;
  &::placeholder {
    font-size: 14px;
    color: #999;
  }
`

const SearchTips = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 10px;
  padding: 20px 20px 10px;
  width: 250px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid #f0f0f0;
  &::before {
    content: '';
    position: absolute;
    left: 20px;
    bottom: 99%;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-bottom-color: #fff;
  }
`

const SearchTrending = styled.div`
  & .trending-title {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
  }
  & .trending-wrap {
    display: flex;
    flex-wrap: wrap;
  }
`

const SearchTrendingTitle = styled.span`
  font-size: 14px;
  color: #969696;
  font-weight: bold;
`

const SearchTrendingSwitch = styled.span`
  font-size: 13px;
  color: #969696;
  cursor: pointer;
  &:hover {
    color: #2f2f2f;
  }
`

const SearchTrendingItem = styled.a`
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 2px 6px;
  display: block;
  flex-shrink: 0;
  font-size: 12px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    color: #333;
    border-color: #b4b4b4;
  }
`

const StyleMode = styled.a`
  color: #969696;
`

const LoginIn = styled.a`
  margin-left: 10px;
  margin-right: 6px;
  color: #969696;
`

const SignUp = styled.a`
  margin-left: 15px;
  margin-right: 5px;
  width: 80px;
  color: ${themeColor};
  border: 1px solid ${themeColor};
  border-radius: 20px;
  &:hover {
    color: ${hoverColor};
    border-color: ${hoverColor};
    background-color: rgba(236, 97, 73, 0.05);
  }
`

const Write = styled.a`
  margin-left: 15px;
  margin-right: 15px;
  width: 100px;
  color: #fff;
  background-color: ${themeColor};
  border-radius: 20px;
  &:hover {
    background-color: ${hoverColor};
  }
`

export {
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
}
