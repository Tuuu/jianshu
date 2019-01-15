import React, { Component } from 'react'
import Header from './component/header'
import { GlobalStyle } from './style'
class App extends Component {
  render () {
    return (
      <>
        <GlobalStyle />
        <Header />
      </>
    )
  }
}

export default App
