import React from "react";

export const EmployeeTable = ({ employees, setEmployes }) => {

    const handleDelete = (idx) => setEmployes((prev) =>  prev.filter((item, itemIdx) => itemIdx !== idx))


  return (
     <div className="employeeTable">
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Position</th>
        <th>Department</th>
        <th>Email</th>
        <th>Salary</th>
        <th>Date</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {employees?.map(
        ({ fullname, position, salary, date, department, email }, idx) => (
          <tr key={email || idx}>
            <td>{fullname}</td>
            <td>{position}</td>
            <td>{department}</td>
            <td>{email}</td>
            <td>{salary}</td>
            <td>{date}</td>
            <td>
              <button onClick={() => handleDelete(idx)}>❌</button>
            </td>
          </tr>
        )
      )}
    </tbody>
  </table>
</div>

  );
};