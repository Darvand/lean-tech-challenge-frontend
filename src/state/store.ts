import { configureStore, createSlice } from "@reduxjs/toolkit";
import { eventApi } from "../services/event.service";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    getToken: async () => null,
  },
  reducers: {
    setTokenProvider: (state, action) => {
      state.getToken = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: {
    [eventApi.reducerPath]: eventApi.reducer,
    auth: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(eventApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
