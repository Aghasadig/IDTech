import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify';


import { EmployeeForm } from './Components/EmployeeForm'
import { EmployeeTable } from './Components/EmployeeTable'

export const App = () => {
  const [employees, setEmployes] = useState([]);

  return (
    <div className='container'>
      <EmployeeForm setEmployes={setEmployes} />
      <EmployeeTable employees={employees}  setEmployes={setEmployes}/>
      <ToastContainer />
    </div>
  )
}
