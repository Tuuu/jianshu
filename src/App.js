import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Header from './component/header'
import Home from './page/home/index'
import Detail from './page/detail/index'
import { GlobalStyle } from './style'
class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <Router>
          <>
            <Header />
            <Route exact path="/" render={props => <Home {...props} />} />
            <Route path="/detail/:id" render={props => <Detail {...props} />} />
          </>
        </Router>
      </Provider>
    )
  }
}

export default App
