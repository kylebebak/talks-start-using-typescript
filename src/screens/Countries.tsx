import React from 'react'
import { Link } from 'react-router-dom'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import { RootState, Continent } from 'types'
import * as Actions from 'redux/actions'
import { getGeo } from 'service'

export interface Props {
  dispatch: Dispatch
  data?: Continent[]
}

class Countries extends React.Component<Props> {
  async componentDidMount() {
    const res = await getGeo()
    this.props.dispatch(Actions.getter({ key: 'countries', data: res.data }))
  }

  render() {
    const { data } = this.props
    if (data === undefined) {
      return <div style={{ fontSize: 100 }}>Loading...</div>
    }

    return (
      <div>
        <Link to="/other">Other Page</Link>
        <div>countries</div>
      </div>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  const data = state.getter['countries'] as Continent[] | undefined
  return { data }
}

export default connect(
  mapStateToProps,
  null,
)(Countries)
