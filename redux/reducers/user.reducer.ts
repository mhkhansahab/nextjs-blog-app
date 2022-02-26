import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { UserReducer } from '../../interfaces';

const initialState: UserReducer = {
  user : null,
  token: null
}

export const userReducer = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserReducer>) => {
      const { payload } = action;
      return {
        ...state,
        user: payload?.user,
        token: payload?.token
      }
    }
  },
})

export const { setUser } = userReducer.actions;
export default userReducer.reducer;