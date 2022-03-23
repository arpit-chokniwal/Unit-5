import { createStore , combineReducers } from 'redux'
import { authReducer } from './isAuth/reducerr'
import { todoReducer } from './todoRedux/reducer'

const rootReducer = combineReducers({
    todo: todoReducer,
    auth : authReducer
})

export const store = createStore(rootReducer ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )