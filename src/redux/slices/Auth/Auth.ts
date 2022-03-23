import { createSlice } from "@reduxjs/toolkit";
import service from "src/Service";


interface AuthInterface {
    user: any;
}
const initialState: AuthInterface = {
    user: null,
};

const authSlice = createSlice({
    name: "counter",
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
                token: res.data.jwt_token

            };
            localStorage.setItem("user", JSON.stringify(user));
            dispatch(authSlice.actions.saveUserInformation(user));
        }
    } catch (error) {
        console.log(error);
    }
}
export default authSlice.reducer;
