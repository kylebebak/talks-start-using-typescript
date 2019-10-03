import React from 'react'

import { Continent } from 'types'

export interface Props {
  continent: Continent
}

const Class = ({ continent }: Props) => {
  const { name, countries } = continent
  return (
    <div>
      <div style={{ fontSize: 60 }}>name: {name}</div>
      {countries.map(c => {
        return (
          <div key={c.code} style={{ marginTop: 10 }}>
            <div>{c.code}</div>
            <div>{c.currency}</div>
            <div>{c.name}</div>
            <div>{c.phone}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Class
