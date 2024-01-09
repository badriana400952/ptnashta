import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import mahasiswaReducer  from './mahasiswa/mahasiswaSlice'
export const store = configureStore({
  reducer: {
    mahasiswa: mahasiswaReducer,
  },
})


export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector : TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector