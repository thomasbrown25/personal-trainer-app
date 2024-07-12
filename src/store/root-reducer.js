import { combineReducers } from "redux";

import transactionsReducer from "./transactions/transactions.reducer";
import userReducer from "./user/user.reducer";
import liabilitiesReducer from "./liabilities/liabilities.reducer";
import accountsReducer from "./accounts/accounts.reducer";
import categoriesReducer from "./categories/categories.reducer";
import frequenciesReducer from "./frequencies/frequencies.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  transactions: transactionsReducer,
  liabilities: liabilitiesReducer,
  accounts: accountsReducer,
  categories: categoriesReducer,
  frequencies: frequenciesReducer
});
