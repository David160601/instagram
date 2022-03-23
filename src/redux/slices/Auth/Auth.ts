import { createSlice } from "@reduxjs/toolkit";
import service from "src/Service";

interface AuthInterface {
    user: UserInterface | null;

}
const initialState: AuthInterface = {
    user: null,

};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        saveUserInformation: (state, action) => {
            state.user = action.payload;
        },

    },
});

export const loginUser = (data: LoginInterface) => async (dispatch: any) => {
    try {
        const res = await service.post("auth/login", data);
        if (res.status === 201) {
            const user: UserInterface = {
                ...res.data.user,
                token: `token=${res.data.jwt_token}`

            };
            localStorage.setItem("user", JSON.stringify(user));
            document.cookie = user.token;
            dispatch(authSlice.actions.saveUserInformation(user));
        }
        return res;
    } catch (error: any) {
        console.log(error)
        return error;
    }
}
export const registerUser = (data: LoginInterface) => async (dispatch: any) => {
    try {
        const res = await service.post("auth/signup", data);
        if (res.status === 201) {
            const res = await dispatch(loginUser({
                email_or_phone: data.email_or_phone,
                password: data.password
            }))
            return res;
        }
    } catch (error: any) {
        return error;
    }
}
export default authSlice.reducer;
