import React from 'react'
import { Link } from 'react-router-dom'

import { getGeo } from 'service'

class Countries extends React.Component {
  async componentDidMount() {
    const res = await getGeo()
    console.log(res.data)
  }

  render() {
    return (
      <div>
        <Link to="/other">Other Page</Link>
        <div>countries</div>
      </div>
    )
  }
}

export default Countries
