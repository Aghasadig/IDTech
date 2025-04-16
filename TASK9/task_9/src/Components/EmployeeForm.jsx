import React from "react";
import { toast } from "react-toastify";

export const EmployeeForm = ({ setEmployes }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();

    const employeFormData = new FormData(e.target);

    const fullname = employeFormData.get("fullname");
    const position = employeFormData.get("position");
    const department = employeFormData.get("department");
    const email = employeFormData.get("email");
    const salary = employeFormData.get("salary");
    const date = employeFormData.get("date");

    if (isNaN(salary)) {
      return alert("Salary is not a number.");
    }

    const employee = {
      fullname,
      position,
      department,
      email,
      salary,
      date,
    };

    setEmployes((prev) => [...prev, employee]);

    e.target.reset();

    toast("Employee added", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="employeeFormWrapper">
      <form className="employeeForm" onSubmit={handleOnSubmit}>
        <input name="fullname" type="text" placeholder="Name" required />
        <input name="position" type="text" placeholder="Positon" required />
        <input name="department" type="text" placeholder="Department" required />
        <input name="email" type="email" placeholder="Email" required />
        <input name="salary" type="text" placeholder="Salary" required />
        <input name="date" type="date" placeholder="D ate" required />

        <button type="submit">Əlavə et</button>
      </form>
    </div>
  );
};