import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./Layout";
import ListEmployee from "./components/ListEmployee";
import EmployeeForm from "./components/EmployeeForm";
import ListDepartement from "./components/ListDepartement";
import DepartmentForm from "./components/DepartmentForm";
import EditEmployee from "./components/EditEmployee";
import EditDepartment from "./components/EditDepartment";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route index path="dashboard" element={<Dashboard />} />


        <Route path="employees" element={<ListEmployee />} />
        <Route path="employees/ajout" element={<EmployeeForm />} />
        <Route path="employees/edit" element={<EditEmployee />} />

        <Route path="departments" element={<ListDepartement />} />
        <Route path="departments/ajout" element={<DepartmentForm />} />
        <Route path="departments/edit" element={<EditDepartment />} />
        </Route>
    </Routes>
  );
}

export default App;
