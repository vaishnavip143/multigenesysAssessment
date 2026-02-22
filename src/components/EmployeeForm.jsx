import { useForm } from "react-hook-form";
import { TextField, Button, MenuItem } from "@mui/material";

const EmployeeForm = ({ onSubmit, countries, defaultValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ padding: "20px" }}>
      <TextField
        label="Name"
        fullWidth
        margin="normal"
        {...register("name", { required: "Name is required" })}
        error={!!errors.name}
        helperText={errors.name?.message}
      />

      <TextField
        label="Email"
        fullWidth
        margin="normal"
        {...register("email", {
          required: "Email required",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email",
          },
        })}
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      <TextField
        label="Mobile"
        fullWidth
        margin="normal"
        {...register("mobile", {
          required: "Mobile required",
          minLength: { value: 10, message: "Minimum 10 digits" },
        })}
        error={!!errors.mobile}
        helperText={errors.mobile?.message}
      />

      <TextField
        select
        label="Country"
        fullWidth
        margin="normal"
        {...register("country", { required: "Country required" })}
        error={!!errors.country}
        helperText={errors.country?.message}
      >
        {countries.map((c) => (
  <MenuItem key={c.id} value={c.id}>
    {c.country}
  </MenuItem>
))}
      </TextField>

      <TextField
        label="State"
        fullWidth
        margin="normal"
        {...register("state", { required: "State required" })}
      />

      <TextField
        label="District"
        fullWidth
        margin="normal"
        {...register("district", { required: "District required" })}
      />

      <Button type="submit" variant="contained" sx={{ marginTop: 2 }}>
        Save
      </Button>
    </form>
  );
};

export default EmployeeForm;