import { configureStore } from '@reduxjs/toolkit'
// eslint-disable-next-line import/named
import { useDispatch,TypedUseSelectorHook, useSelector } from 'react-redux'


import counterReducer from './counter/counterSlice'
// import { localSotrageMiddleware } from './middlewares/localstorage.middleware'
import pokemonsSlice from './pokemon/pokemonsSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemons: pokemonsSlice,
  },
  // middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat( localSotrageMiddleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector