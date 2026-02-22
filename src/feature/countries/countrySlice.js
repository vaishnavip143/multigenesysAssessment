import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../services/axiosInstance";

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get("/country");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const countrySlice = createSlice({
  name: "countries",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default countrySlice.reducer;