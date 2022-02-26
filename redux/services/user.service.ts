import { UserLogin, UserSignup } from "../../interfaces";
import { addUser } from "../actions/user.action";
import { AppDispatch } from "../store";

export const signUp: Function = (user: UserSignup) => async (dispatch: AppDispatch) => {
    if (user?.name && user?.email && user?.password) {
        try {
            const apiData = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...user })
            }
            const response = await fetch('https://nestjs-blog-app.herokuapp.com/auth/signup', apiData)
            const data = await response.json();
            if (data?.success) {
                dispatch(addUser({ token: data?.access_token, user: data?.user }))
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

export const logIn: Function = (user: UserLogin) => async (dispatch: AppDispatch) => {
    if (user?.email && user?.password) {
        try {
            const apiData = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...user })
            }

            const response = await fetch('https://nestjs-blog-app.herokuapp.com/auth/login', apiData)
            const data = await response.json();
            if (data?.success) {
                dispatch(addUser({ token: data?.access_token, user: data?.user }))
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