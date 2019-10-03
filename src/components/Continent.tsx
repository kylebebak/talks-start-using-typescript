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
      <div style={{ fontSize: 30 }}>countries: {countries.length}</div>
    </div>
  )
}

export default Class
