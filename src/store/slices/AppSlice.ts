import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppSliceState } from "../../models";

const initialState: AppSliceState = {
  toasts: [],
};

export const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setToast: (state, action: PayloadAction<string>) => {
      const toasts = [...state.toasts];
      toasts.push(action.payload);
      state.toasts = toasts;
    },
    clearToasts: (state) => {
      state.toasts = [];
    },
  },
});

export const { setToast, clearToasts } = AppSlice.actions;
