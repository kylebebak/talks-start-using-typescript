import React from 'react'
import { Link } from 'react-router-dom'

import { getGeo, GeoData } from 'service'
import { useGetter } from 'hooks'
import ContinentComponent from 'components/Continent'

const ContinentsHooks = (props: {}) => {
  const res = useGetter<GeoData>(getGeo, 'continents')

  if (!res) {
    return <div style={{ fontSize: 100 }}>Loading...</div>
  }

  return (
    <div>
      <Link to="/other">Other Page</Link>
      {res.data.data.continents.map(c => (
        <ContinentComponent key={c.code} continent={c} />
      ))}
    </div>
  )
}

export default ContinentsHooks
