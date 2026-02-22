import React, { useState } from "react";
import ConfirmDialog from "./ConfirmDialog";

function EmployeeItem({ employee, onDelete }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <span>{employee.name}</span>
      <button onClick={() => setOpen(true)}>Delete</button>

      <ConfirmDialog
        open={open} 
        title={`Delete ${employee.name}?`} 
        onClose={() => setOpen(false)} 
        onConfirm={() => {
          onDelete(employee.id); 
          setOpen(false); 
        }}
      />
    </div>
  );
}
