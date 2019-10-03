import { AnyAction } from 'redux'

export interface Getter {
  data: any
  key: string
}
export function getter(payload: Getter): AnyAction {
  return {
    type: 'GETTER',
    payload,
  }
}

export type Action =
  | { type: 'GETTER'; payload: Getter }
