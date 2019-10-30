import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import Continents from 'screens/Continents'
import ContinentsHooks from 'screens/ContinentsHooks'
import OtherPage from 'screens/OtherPage'

import store from 'redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Continents} />
        <Route exact path="/hooks" component={ContinentsHooks} />
        <Route exact path="/other" component={OtherPage} />
      </Router>
    </Provider>
  )
}

export default App
