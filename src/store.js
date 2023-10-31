import {configureStore} from "@reduxjs/toolkit";
import {user} from "./slice/memberSlice";

export default configureStore({
    reducer: {
        /*전역변수 모음집*/
        user : user.reducer,
    }
})