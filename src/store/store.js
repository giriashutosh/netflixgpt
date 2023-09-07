import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './UserSlice'
import { composeWithDevTools } from 'redux-devtools-extension'

const appStore = configureStore({
    reducer: {
        user: UserReducer
    }
})

export default appStore