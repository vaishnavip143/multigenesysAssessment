import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee, updateEmployee } from "../feature/employees/employeeSlice";
import { fetchCountries } from "../feature/countries/countrySlice";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeForm from "../components/EmployeeForm";
import { Typography } from "@mui/material";

import { fetchEmployeeById } from "../feature/employees/employeeSlice";
const AddEditPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: employees, loading } = useSelector((state) => state.employees);
  const { data: countries } = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);
  useEffect(() => {
    if (id && employees.length === 0) {
      dispatch(fetchEmployeeById(id));
    }
  }, [id, employees.length]);
  const existingEmployee = employees.find((emp) => emp.id === id);

  const onSubmit = (data) => {
    if (id) {
      dispatch(updateEmployee({ id, data }));
    } else {
      dispatch(addEmployee(data));
    }
    navigate("/");
  };

  if (id && loading && employees.length === 0) {
    return <Typography sx={{ textAlign: "center", mt: 4 }}>Loading employee data...</Typography>;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f6f8",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "500px",
          backgroundColor: "#ffffff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ marginBottom: "20px", textAlign: "center" }}>
          {id ? "Edit Employee" : "Add Employee"}
        </h2>

        <EmployeeForm
          onSubmit={onSubmit}
          countries={countries}
          defaultValues={existingEmployee}
        />
      </div>
    </div>
  );
}
export default AddEditPage;