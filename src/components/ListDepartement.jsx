import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";
import EditDepartment from "./EditDepartment";

const ListDepartement = () => {
  const [departments, setDepartments] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchDepartment();
  }, []);

  const fetchDepartment = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/departments");
      const data = await response.json();
      setDepartments(data);
    } catch (error) {
      console.error("Error fetching departments:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/departments/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        navigate("/departments");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error fetching departments:", error);
    }
   
  };


  return (
    <>
      <ToastContainer />
      <div className="pagetitle">
        <h1>Liste Départements</h1>
      </div>

      <section className="section">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Départements</h5>

                <table className="table datatable">
                  <thead>
                    <tr>
                      <th>
                        <b>ID département</b>
                      </th>
                      <th>Nom </th>
                      <th>Description</th>
                      <th>Manager</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {departments.length > 0 ? (
                      departments.map((dept, index) => (
                        <tr key={dept.id}>
                          <td>{index + 1}</td>
                          <td>{dept.name}</td>
                          <td>{dept.description}</td>
                          <td>
                            {dept.manager != undefined ? dept.manager : "--"}
                          </td>
                          <td className="d-flex  gap-3">
                            
                            <EditDepartment department={dept}/>
                            <button
                              className="nav-link nav-icon"
                              onClick={() => handleDelete(dept.id)}
                            >
                              <i className="bi bi-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={5}></td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default ListDepartement;
