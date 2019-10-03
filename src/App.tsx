import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import Countries from 'screens/Countries'
import OtherPage from 'screens/OtherPage'

import store from 'redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Countries} />
        <Route exact path="/other" component={OtherPage} />
      </Router>
    </Provider>
  )
}

export default App
