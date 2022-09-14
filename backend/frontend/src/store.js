import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { programListReducer, programDetailsReducer } from './reducers/programReducers'
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers'

const reducer = combineReducers({
    programList: programListReducer,
    programDetails: programDetailsReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
})

const userInforFromStorage = localStorage.getItem('userInfor') ?
    JSON.parse(localStorage.getItem('userInfor')) : null

const initialState = {
    userLogin:{userInfo: userInforFromStorage}
}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store    