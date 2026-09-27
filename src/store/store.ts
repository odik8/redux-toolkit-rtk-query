import { combineReducers, configureStore } from "@reduxjs/toolkit"
import userReducer from './reducers/UserSlice.ts'
import { postApi } from "../services/PostService.ts";

const rootReducer = combineReducers({
  userReducer,
  [postApi.reducerPath]: postApi.reducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(postApi.middleware)
    }
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppState = ReturnType<typeof setupStore>
export type AppDispatch = AppState['dispatch']