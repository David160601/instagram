import { createSlice } from "@reduxjs/toolkit";
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

export const loginUser = (data: LoginInterface) => async () => {
    try {
        const test = service.post("auth/login", data);
        console.log(test)
    } catch (error) {
        console.log(error);
    }
}
export default authSlice.reducer;
