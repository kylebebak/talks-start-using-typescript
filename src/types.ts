export interface RootState {
  getter: { [key: string]: undefined | {} }
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
