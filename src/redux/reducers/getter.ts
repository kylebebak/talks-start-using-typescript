import { RootState } from 'types'
import { Action } from 'redux/actions'

export default function reduce(state: RootState['getter'] = {}, action: Action): RootState['getter'] {
  switch (action.type) {
    case 'GETTER': {
      const { response: res, key } = action.payload

      return {
        ...state,
        [key]: res,
      }
    }
    default:
      return state
  }
}
