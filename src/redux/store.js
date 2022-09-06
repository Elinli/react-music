import { createStore,combineReducers } from 'redux'

import { bgColorReducer } from './reducers/bgColor'

const reducers = combineReducers({
  bgColorReducer
})
export const store = createStore(reducers)
