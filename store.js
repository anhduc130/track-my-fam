import { createStore, combineReducers, applyMiddleware } from 'redux'
import message from './reducers/message'
import thunk from 'redux-thunk'
const reducer = combineReducers({
  message
})
const store = createStore(
  reducer,
  applyMiddleware(thunk)
)
export default store
