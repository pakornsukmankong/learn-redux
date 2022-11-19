import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  count : 0
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers:{
    increase: (state,action) => {
      state.count += 1
    },
    decrease: (state, action) => {
      state.count -= 1
    }
  },
  extraReducers:{}
})

export default counterSlice.reducer

export const {increase,decrease} = counterSlice.actions