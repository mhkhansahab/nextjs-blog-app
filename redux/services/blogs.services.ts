import { BlogCredentials, BlogData } from "../../interfaces";
import { addBlogs, deleteMyBlog } from "../actions/blogs.action";
import { AppDispatch } from "../store";
import { useAppSelector } from "../app/hooks";
import { title } from "process";

export const getBlogs: Function = (blogCreds: BlogCredentials) => async (dispatch: AppDispatch) => {
    if (blogCreds?.id && blogCreds?.token) {
        try {
            const apiData: any = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: blogCreds?.token,
                }
            };
            const response = await fetch('https://nestjs-blog-app.herokuapp.com/blogs/me/' + blogCreds?.id, apiData);
            const data: any = await response.json();
            if (data?.success) {
                const filtered = data?.data?.map((blog: BlogData) => {
                    return {
                        title: blog?.title,
                        description: blog?.description,
                        author: blog?.author,
                        authorId: blog?.authorId,
                        _id: blog?._id
                    }
                })
                dispatch(addBlogs({ blogs: filtered }))
                return {
                    ...data
                }
            } else {
                return {
                    ...data
                }
            }
        } catch (e) {
            return {
                success: false
            }
        }
    }
}


export const deleteBlog: Function = (blogCreds: BlogCredentials) => async (dispatch: AppDispatch) => {
    if (blogCreds?.id && blogCreds?.token) {
        try {
            const apiData: any = {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: blogCreds?.token,
                }
            };
            const response = await fetch('https://nestjs-blog-app.herokuapp.com/blogs/' + blogCreds?.id, apiData);
            const data: any = await response.json();
            if (data?.success) {
                const title: string = data?.data?.title;
                const description: string = data?.data?.description;
                const author: string = data?.data?.author;
                const authorId: string = data?.data?.authorId;
                const _id: string = data?.data?.id;
                
                const blog: BlogData = {
                    title,
                    description,
                    author,
                    authorId,
                    _id
                }
                dispatch(deleteMyBlog(blog))
                return {
                    ...data
                }
            } else {
                return {
                    ...data
                }
            }
        } catch (e) {
            console.log(e);
            return {
                success: false
            }
        }
    }
}