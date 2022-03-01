
import { BlogData, BlogReducer } from "../../interfaces";
import { setBlogs, deleteAndSetBlog } from "../reducers/blogs.reducer";
import { AppDispatch } from "../store";

export const addBlogs = (blogs: BlogReducer) => (dispatch: AppDispatch) => {
    dispatch(setBlogs(blogs));
}

export const deleteMyBlog = (blog: BlogData) => (dispatch: AppDispatch) => {
    dispatch(deleteAndSetBlog(blog));
}