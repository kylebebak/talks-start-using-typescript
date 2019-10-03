import React from 'react'

import { getGeo } from 'service'
import logo from './logo.svg'
import './App.css'

class App extends React.Component {
  async componentDidMount() {
    const res = await getGeo()
    console.log(res.data)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    )
  }
}

export default App
