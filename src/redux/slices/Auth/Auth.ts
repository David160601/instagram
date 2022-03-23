import { createSlice } from "@reduxjs/toolkit";
import service from "src/Service";


interface AuthInterface {
    user: UserInterface | null;
    error: any;
}
const initialState: AuthInterface = {
    user: null,
    error: null
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
    } catch (error) {
        console.log(error);
    }
}
export default authSlice.reducer;
