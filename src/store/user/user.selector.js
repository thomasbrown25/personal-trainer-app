export const selectCurrentUser = (state) => state.user.currentUser;

export const selectIsAuthenticated = (state) => state.user.isAuthenticated;

export const selectIsLoadingAuth = (state) => state.user.loading;

export const selectIsLinkValid = (state) => state.user.isLinkValid;

export const selectUser = (state) => state.user;

export const selectUserRole = (state) => state.user.currentUser?.role;

export const selectUserTrainer = (state) => state.user.currentUser?.trainer;
