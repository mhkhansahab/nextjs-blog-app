import { MouseEventHandler } from "react";

export interface Blog {
    title: string,
    description: string,
    author: string,
    id: string,
    isMyBlog: boolean,
    handleClick: React.MouseEventHandler,
    handleEdit?: (id: string) => void,
    handleDelete?: (id: string) => void
}

export interface UserLogin {
    email: string,
    password: string
}
export interface UserSignup {
    name: string,
    email: string,
    password: string
}

export interface userState {
    user: {} | null,
    token: string | null
}


export interface UserRoute {
    type: string
}

export interface UserData {
    _id: string,
    name: string,
    email: string
}

export interface BlogData {
    title: string,
    description: string,
    author: string,
    authorId: string,
    _id: string
}
export interface UserReducer {
    user: UserData | null,
    token: string | null
}
export interface BlogReducer {
    blogs: BlogData[] | null,
}

export interface BlogCredentials{
    id: string,
    token :string
}