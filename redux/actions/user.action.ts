import { UserReducer } from "../../interfaces";
import { setUser } from "../reducers/user.reducer";
import { AppDispatch } from "../store";

export const addUser = (user: UserReducer) => (dispatch: AppDispatch) => {
  dispatch(setUser(user));
}