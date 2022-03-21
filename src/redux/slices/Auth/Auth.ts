import { createSlice } from "@reduxjs/toolkit";
import { DispatchProp } from "react-redux";
import service from "src/Service";

interface AuthInterface {
    user: UserInterface | null;
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
            dispatch(authSlice.actions.saveUserInformation({
                ...res.data.user,
                token: res.data.jwt_token

            }))
        }
    } catch (error) {
        console.log(error);
    }
}
export default authSlice.reducer;
