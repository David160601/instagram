import { combineReducers } from "redux";

import Auth from "@redux/slices/Auth";

const rootReducer = combineReducers({ Auth });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
