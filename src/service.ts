import { Continent } from 'types'
import request from 'request-dot-js'

export type GeoData = { data: { continents: Continent[] }; errors: null }

const geoQuery = `
{
  continents {
    name
    code
    countries {
      name
      code
      phone
      currency
    }
  }
}
`

export async function getGeo(a: any) {
  console.log('getGeo', a)
  return request<GeoData>('https://countries.trevorblades.com/', { body: { query: geoQuery }, method: 'POST' })
}
