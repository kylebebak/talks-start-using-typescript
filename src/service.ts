import { Continent } from 'types'

export type GeoData = { data: { continents: Continent[] }; errors: null }

async function postData<Data = any>(url = '', data = {}): Promise<Data> {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    redirect: 'follow',
    referrer: 'no-referrer',
    body: JSON.stringify(data),
  })
  return await response.json()
}

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

export async function getGeo() {
  return postData<GeoData>('https://countries.trevorblades.com/', { query: geoQuery })
}
