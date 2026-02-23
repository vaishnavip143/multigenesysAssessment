import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees, deleteEmployee } from "../feature/employees/employeeSlice";
import { fetchCountries } from "../feature/countries/countrySlice";
import { useNavigate } from "react-router-dom";
import EmployeeList from "../components/EmployeeList";
import { Button, TextField, Typography } from "@mui/material";
import { fetchEmployeeById } from "../feature/employees/employeeSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data: employees, loading, error } = useSelector((state) => state.employees);
  const { data: countries } = useSelector((state) => state.countries);

  const [searchId, setSearchId] = useState("");
  console.log(employees);
  const filteredEmployees = searchId
    ? employees.filter(
      (emp) => emp.id.toString() === searchId.trim()
    )
    : employees;

  useEffect(() => {
    dispatch(fetchEmployees());
    dispatch(fetchCountries());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteEmployee(id));
    }
  };

  const handleSearch = () => {
    if (searchId.trim()) {
      dispatch(fetchEmployeeById(searchId.trim()));
    } else {
      dispatch(fetchEmployees());
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f5f7fa",
        minHeight: "100vh"
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "#1a1a1a",
          fontWeight: 600,
          marginBottom: 2
        }}
      >
        Employee List
      </Typography>

      <Button
        variant="contained"
        sx={{ marginTop: 2, marginBottom: 2 }}
        onClick={() => navigate("/add")}
      >
        Add Employee
      </Button>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <TextField
          label="Search by ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />

        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </div>

      {loading && (
        <Typography sx={{ textAlign: "center", my: 2 }}>Loading employees...</Typography>
      )}
      {error && (
        <Typography color="error" sx={{ textAlign: "center", my: 2 }}>
          {error}
        </Typography>
      )}
      {searchId && !loading && filteredEmployees.length === 0 && (
        <Typography color="error" sx={{ textAlign: "center" }}>😢</Typography>
      )}
      <EmployeeList
        employees={employees}
        countries={countries}
        onDelete={handleDelete}
        onEdit={(id) => navigate(`/edit/${id}`)}
      />
    </div>
  );
};

export default HomePage;
