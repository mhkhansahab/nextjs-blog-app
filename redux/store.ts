import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user.reducer';
import blogsReducer from './reducers/blogs.reducer';
import thunk from "redux-thunk";

const store = configureStore({
    reducer: {
        userData: userReducer,
        blogsData: blogsReducer
    },
    middleware : (getDefaultMiddleware)=>getDefaultMiddleware().concat(thunk)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;