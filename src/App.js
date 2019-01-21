import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Header from './component/header'
import Home from './page/home'
import { GlobalStyle } from './style'
class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <Header />
        <Home />
      </Provider>
    )
  }
}

export default App
