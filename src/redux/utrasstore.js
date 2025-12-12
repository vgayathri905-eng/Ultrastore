import { configureStore } from '@reduxjs/toolkit'
import counterdata from "./counterslice"
import cartitemslice from "./cartslice"
export const utrastore = configureStore({
  reducer: {
    counter:counterdata,
    cart:cartitemslice
  },
})  