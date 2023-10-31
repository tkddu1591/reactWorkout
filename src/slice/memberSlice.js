import {createSlice} from "@reduxjs/toolkit";

let user = createSlice({
    name : 'user',
    initialState : 'user',
    reducers : {
        changeMember:(state, action) => {
            return action.payload;
        },
    }
})

export {user}
export const {changeMember} = user.actions;