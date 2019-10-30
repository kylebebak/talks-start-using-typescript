import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { getGeo, GeoData } from 'service'
import { useGetRedux } from 'hooks'
import ContinentComponent from 'components/Continent'

const ContinentsHooks = (props: {}) => {
  const [val, setVal] = useState(false)
  const res = useGetRedux<GeoData>(`continents-${val}`, () => getGeo(val))

  if (!res) {
    return <div style={{ fontSize: 100 }}>Loading...</div>
  }

  return (
    <div>
      <Link to="/other">Other Page</Link>
      <span onClick={() => setVal(!val)}>{val ? 'true' : 'false'}</span>
      {res.data.data.continents.map(c => (
        <ContinentComponent key={c.code} continent={c} />
      ))}
    </div>
  )
}

export default ContinentsHooks
