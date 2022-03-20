import { createSlice } from "@reduxjs/toolkit";

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

export default authSlice.reducer;
