import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
const EmployeeList = ({ employees, countries, onDelete, onEdit }) => {
const getCountryName = (countryValue) => {
  const countryObj = countries.find(
    (c) => c.id === countryValue || c.country === countryValue
  );

  return countryObj ? countryObj.country : countryValue;
};
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Mobile</TableCell>
          <TableCell>Country</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {employees.map((emp) => (
          <TableRow key={emp.id}>
            <TableCell>{emp.name}</TableCell>
            <TableCell>{emp.email}</TableCell>
            <TableCell>{emp.mobile}</TableCell>
            <TableCell>{getCountryName(emp.country)}</TableCell>

            <TableCell>
              <Button onClick={() => onEdit(emp.id)}>Edit</Button>
              <Button color="error" onClick={() => onDelete(emp.id)}>
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default EmployeeList;