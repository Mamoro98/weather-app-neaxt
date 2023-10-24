'use client'
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { weatherSlice } from "./features/weatherslice";
import {TypedUseSelectorHook,useSelector} from 'react-redux'
export const store = configureStore({
    reducer: {
      [weatherSlice.name]: weatherSlice.reducer,
    },
    devTools:true
  });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
