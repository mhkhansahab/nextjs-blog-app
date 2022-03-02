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
    },
    updateBlogs: (state, action: PayloadAction<BlogData>) => {
      const { payload } = action;
      const updatedBlogs: any = state?.blogs?.map((blog) => {
        if (blog?._id === payload?._id) {
          return {
            ...blog,
            title: payload?.title,
            description: payload?.description,
          }
        }
      })
      return {
        ...state,
        blogs: updatedBlogs
      }
    }
  },
})

export const { setBlogs, deleteAndSetBlog, updateBlogs } = blogReducer.actions;
export default blogReducer.reducer;