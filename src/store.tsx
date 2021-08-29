import { configureStore } from '@reduxjs/toolkit'
import StarterReducer from './features/HomePage/StarterSlice'

export const store = configureStore({
  reducer: {
    starter: StarterReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch