import { Response } from 'request-dot-js'

export interface RootState {
  getter: { [key: string]: Response | undefined }
}

export interface Place {
  code: string
  name: string
}

export interface Country extends Place {
  currency: string
  phone: string
}

export interface Continent extends Place {
  countries: Country[]
}
