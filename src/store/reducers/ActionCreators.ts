import axios from "axios";
import type { IUser } from "../../models/IUser.ts";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(userSlice.actions.usersFetching())
//     const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/sdusers")
//     dispatch(userSlice.actions.usersFetchingSuccess(response.data))
//   } catch (e) {
//     dispatch(userSlice.actions.usersFetchingError(e.message))
//   }
// }

export const fetchUsers = createAsyncThunk<IUser[], void, { rejectValue: string }>(
  'user/fetchAll',
  async (_, thunkAPI) => {
    try {
      // await new Promise(resolve => setTimeout(resolve, 1000))
      const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
      return response.data
    } catch {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей")
    }
  }
)
