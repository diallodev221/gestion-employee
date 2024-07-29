import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const ListEmployee = () => {

  const [employees, setEmployees] = useState([])

  

  useEffect(() => {
    fetchEmployees()
  }, [])
  


  const fetchEmployees = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/employees");
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/employees/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        window.location.reload();
      }
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
   
  };



  return (
    <>
      <div className="pagetitle">
      <h1>Liste Employés</h1>
    </div>

    <section className="section">
      <div className="row">
        <div className="col-lg-12">

          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Employés</h5>

              <table className="table datatable">
                <thead>
                    <tr>
                    <th>
                      <b>ID</b>
                    </th>
                    <th>
                      <b>Prénom</b>
                    </th>
                      <th>Nom</th>
                      <th>Email</th>
                    <th>Addresse</th>
                    <th>Téléphone</th>
                    <th>Position</th>
                    <th className="text-bold">Salaire</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                  <tbody>
                    {employees.length > 0 ? employees.map((employee, index) => (
                      <tr key={employee.id}>
                    <td>{index + 1} </td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                    <td>{employee.address}</td>
                        <td>{employee.phone}</td>
                        <td>{employee.position}</td>
                        <td>{employee.salary}</td>
                        <td className="d-flex  gap-3">
                            <Link
                              className="nav-link nav-icon"
                              to={`/employees/${employee.id}/edit`}
                            >
                              <i className="bi bi-pencil-square"></i>
                            </Link>
                            <button
                            className="nav-link nav-icon"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            onClick={() => handleDelete(employee.id)}
                            >
                              <i className="bi bi-trash"></i>
                            </button>
                          </td>
                    </tr>
                    )): <tr><td colSpan={9}></td></tr>}
                  
                    
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}

export default ListEmployee