import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Dispatch } from 'redux'
import { Link } from 'react-router-dom'

import { RootState } from 'types'
import * as Actions from 'redux/actions'
import { getGeo, GeoData } from 'service'
import ContinentComponent from 'components/Continent'

const f = async (dispatch: Dispatch) => {
  const res = await getGeo()
  dispatch(Actions.getter({ key: 'continents', data: res }))
}

const ContinentsHooks = (props: {}) => {
  const dispatch = useDispatch()

  useEffect(() => { f(dispatch) }, [dispatch])

  const continents = useSelector((state: RootState) => {
    const res = state.getter['continents']
    if (!res || res.type !== 'success') return
    return (res.data as GeoData).data.continents
  })

  if (continents === undefined) {
    return <div style={{ fontSize: 100 }}>Loading...</div>
  }

  return (
    <div>
      <Link to="/other">Other Page</Link>
      {continents.map(c => (
        <ContinentComponent key={c.code} continent={c} />
      ))}
    </div>
  )
}

export default ContinentsHooks
