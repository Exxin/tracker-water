export const selectMonthly = (state) => state.water.monthly;
export const selectWaterLoading = (state) => state.water.loading;
export const selectWaterError = (state) => state.water.error;
export const selectGetDaily = (state) => state.water.daily;
export const selectChosenDate = (state) => state.water.chosenDate;
export const selectTodayWater = (state) => state.water.todayWater;
export const selectTodayWaterAmount = (state) =>
  state.water.todayWater.reduce((acc, item) => acc + item.amount, 0);
