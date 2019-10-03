import React from 'react'

import { Continent } from 'types'

export interface Props {
  continent: Continent
}

const Class = ({ continent }: Props) => {
  const { name, countries } = continent
  return (
    <div>
      <div style={{ fontSize: 40 }}>name: {name}</div>
      <div>countries: {countries.length}</div>
    </div>
  )
}

export default Class
