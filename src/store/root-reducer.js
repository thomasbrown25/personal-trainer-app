import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import trainerReducer from "./trainer/trainer.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  trainer: trainerReducer
});
