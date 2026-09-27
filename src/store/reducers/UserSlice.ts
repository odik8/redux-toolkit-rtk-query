import type { IUser } from "../../models/IUser.ts";
import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./ActionCreators.ts";

interface UserState {
  users: IUser[]
  isLoading: boolean
  error: string
  count: number
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: '',
  count: 0,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false
        state.users = action.payload
        state.error = ''
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload ?? action.error.message ?? 'Неизвестная ошибка'
      })
  },
})

export default userSlice.reducer
