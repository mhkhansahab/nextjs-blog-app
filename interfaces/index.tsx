export interface Blog {
    title: string,
    description: string,
    author: string,
    id: string
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
export interface UserReducer {
    user: UserData | null,
    token: string | null
}