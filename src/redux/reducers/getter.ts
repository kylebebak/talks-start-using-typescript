import { RootState } from 'types'
import { Action } from 'redux/actions'

export default function reduce(state: RootState['getter'] = {}, action: Action): RootState['getter'] {
  switch (action.type) {
    case 'GETTER': {
      const { data, key } = action.payload

      return {
        ...state,
        [key]: data,
      }
    }
    default:
      return state
  }
}
