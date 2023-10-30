import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  res: {},
}

export const VerifySlice = createSlice({
  name: 'verfication',
  initialState,
  reducers: {
    setRes:(state,action)=>{
      state.res=action
    }
  }
})
// Action creators are generated for each case reducer function
export const { setRes } = VerifySlice.actions
export default VerifySlice.reducer