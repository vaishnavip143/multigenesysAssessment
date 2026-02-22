import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../services/axiosInstance";

export const fetchEmployees = createAsyncThunk(
  "employees/fetchEmployees",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get("/employee");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);export const fetchEmployeeById = createAsyncThunk(
  "employees/fetchEmployeeById",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(`/employee/${id}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addEmployee = createAsyncThunk(
  "employees/addEmployee",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("/employee", data);
      alert(`Employee ${res.data.id} added successfully!`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateEmployee = createAsyncThunk(
  "employees/updateEmployee",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.put(`/employee/${id}`, data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteEmployee = createAsyncThunk(
  "employees/deleteEmployee",
  async (id, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/employee/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


const employeeSlice = createSlice({
  name: "employees",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addEmployee.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(fetchEmployeeById.pending, (state) => {
  state.loading = true;
  state.error = null;
})
.addCase(fetchEmployeeById.fulfilled, (state, action) => {
  state.loading = false;
  state.data = [action.payload];   // important
})
.addCase(fetchEmployeeById.rejected, (state) => {
  state.loading = false;
  state.error = "Employee not found";
  state.data = [];
})
      .addCase(updateEmployee.fulfilled, (state, action) => {
        const index = state.data.findIndex(
          (emp) => emp.id === action.payload.id
        );
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.data = state.data.filter(
          (emp) => emp.id !== action.payload
        );
      });
  },
});

export default employeeSlice.reducer;