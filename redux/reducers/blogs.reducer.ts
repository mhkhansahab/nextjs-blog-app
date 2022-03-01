import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { BlogData, BlogReducer } from '../../interfaces';

const initialState: BlogReducer = {
  blogs: null,
}

export const blogReducer = createSlice({
  name: 'blogsData',
  initialState,
  reducers: {
    setBlogs: (state, action: PayloadAction<BlogReducer>) => {
      const { payload } = action;
      return {
        ...state,
        blogs: payload?.blogs
      }
    },
    deleteAndSetBlog: (state, action: PayloadAction<BlogData>) => {
      const { payload } = action;
      const filteredBlogs: any = state?.blogs?.filter((blog) => {
        if (blog?._id !== payload?._id) {
          return {
            ...blog
          }
        }
      })
      return {
        ...state,
        blogs: filteredBlogs
      }
    }
  },
})

export const { setBlogs, deleteAndSetBlog } = blogReducer.actions;
export default blogReducer.reducer;