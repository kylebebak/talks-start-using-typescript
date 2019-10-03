import React from 'react'
import { Link } from 'react-router-dom'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import { RootState, Continent } from 'types'
import * as Actions from 'redux/actions'
import { getGeo, GeoData } from 'service'
import ContinentComponent from 'components/Continent'

export interface Props {
  dispatch: Dispatch
  continents?: Continent[]
}

class Continents extends React.Component<Props> {
  async componentDidMount() {
    const res = await getGeo()
    this.props.dispatch(Actions.getter({ key: 'continents', data: res }))
    console.log('fetched', res)
  }

  render() {
    const { continents } = this.props
    if (continents === undefined) {
      return <div style={{ fontSize: 100 }}>Loading...</div>
    }

    return (
      <div>
        <Link to="/other">Other Page</Link>
        {continents.map(c => <ContinentComponent key={c.code} continent={c} />)}
      </div>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  const data = state.getter['continents'] as GeoData | undefined
  if (!data) return { continents: undefined }
  return { continents: data.data.continents }
}

export default connect(
  mapStateToProps,
  null,
)(Continents)
