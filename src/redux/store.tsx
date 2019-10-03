import { createStore, combineReducers } from 'redux'

import reducers from './reducers/index'

const appReducer = combineReducers({
  ...reducers,
})

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action)
}

const initialStore = {}

const store = createStore(rootReducer, initialStore)

export default store
