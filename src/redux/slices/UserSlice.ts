import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {RootState} from '../../Store.ts'
import {Person} from '../../../typings'

type UserState  =  {
    data : Person[],
    status: string
    error: null
};

const initialState: UserState  = {
    data: [],
    status : 'idle',
    error: null,
}



//  fetching data
export const fetchedUser= createAsyncThunk('user/fetchedUser', async() => {
    try {
        const response  = await axios.get('https://dummyjson.com/users')
        return response.data
    }catch (message){
        return message
    }
})


// Slice
const UsersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},

    extraReducers  : (builder) => {
        builder
            .addCase(fetchedUser.pending, (state, action) => {
                state.status = 'loading'
                console.log('loading ....')
                console.log(action.payload)

            })
            .addCase(fetchedUser.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.data.push(action.payload.users)
                console.log('Success....')
            })
            .addCase(fetchedUser.rejected, (state, action) => {
                state.status = 'failed'
                console.log(action.payload)
            })
    }
});


export const selectAllUser = (state: RootState ) => state.user.data[0];
export const getUsersStatus = (state: RootState ) => state.user.status;
export const getUsersError = (state: RootState ) => state.user.error;

export default UsersSlice.reducer

