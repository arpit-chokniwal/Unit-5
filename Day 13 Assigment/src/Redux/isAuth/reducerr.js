import { AUTH_CHECK } from "./action"
const initialState = {
    auth : false
}

export const authReducer = (store = initialState,{type,payload}) =>{

switch (type) {
    case AUTH_CHECK: return {...store , auth: payload}

    default: return store
}
}