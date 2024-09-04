import { createSlice } from "@reduxjs/toolkit";
import {
  getWaterByMonth,
  getWaterPerDay,
  getTodayWater,
  postWater,
  deleteWater,
  patchWater,
} from "./operations";
const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const waterSlice = createSlice({
  name: "water",
  initialState: {
    daily: [],
    monthly: [],
    todayWater: [],
    isLoading: false,
    isError: false,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getWaterByMonth.pending, handlePending)
      .addCase(getWaterByMonth.fulfilled, (state, action) => {
        state.monthly = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(getWaterByMonth.rejected, handleRejected)
      .addCase(getWaterPerDay.pending, handlePending)
      .addCase(getWaterPerDay.fulfilled, (state, action) => {
        state.daily = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(getWaterPerDay.rejected, handleRejected)
      .addCase(getTodayWater.pending, handlePending)
      .addCase(getTodayWater.fulfilled, (state, action) => {
        state.todayWater = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(getTodayWater.rejected, handleRejected)
      .addCase(postWater.pending, handlePending)
      .addCase(postWater.fulfilled, (state, action) => {
        state.daily.push(action.payload);
        state.todayWater.push(action.payload);
        state.monthly.push(action.payload);
        state.isLoading = false;
      })
      .addCase(getTodayWater.rejected, handleRejected)
      .addCase(deleteWater.pending, handlePending)
      .addCase(deleteWater.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todayWater = state.todayWater.filter((item) => {
          return item._id !== action.payload;
        });
      })
      .addCase(deleteWater.rejected, handleRejected)
      .addCase(patchWater.pending, handlePending)
      .addCase(patchWater.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todayWater = state.todayWater.map((item) => {
          if (item._id === action.payload._id) {
            return { ...item, ...action.payload };
          }
          return item;
        });
      })
      .addCase(patchWater.rejected, handleRejected);
  },
});
export default waterSlice.reducer;
