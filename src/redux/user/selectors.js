export const selectUser = (state) => state.users.data;

export const selectUserLoading = (state) => state.users.isLoading;
export const selectUserError = (state) => state.users.isError;
export const selectWaterDailyNorma = (state) => state.users.data.waterAmount;
