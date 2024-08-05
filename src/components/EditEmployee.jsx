import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"

const EditEmployee = () => {

  const { id} = useParams()

  const [employee, setEmployee] = useState({
    id: id, firstName: '', lastName: '', email: '', address: '', phone: '', position: '', salary: ''
  })

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8080/api/employees/${id}`)
      .then(res => res.json())
      .then((data) => {
        setEmployee({
          ...employee,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          address: data.address,
          phone: data.phone,
          position: data.position,
          salary: data.salary
        })
     
   }).catch(err => {
      console.error(err)
    })
  }, [])

  function handleSubmit(event) {
    event.preventDefault();

    const employeeRequest = {
      ...employee
    }

    fetch(`http://localhost:8080/api/employees/${id}`, {
      method: "PUT",
      body: JSON.stringify(employeeRequest),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          navigate("/employees");
          console.log("employee updated successfully");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleCancel() {
    navigate('/employees')
  }

  return (
    <div className="container d-flex justify-content-center align-content-center">
    <div className="card h-auto" style={{ maxWidth: "700px" }}>
      <div className="card-body">
        <h5 className="card-title">Editer Employee</h5>

        <form onSubmit={handleSubmit} className="row g-3 needs-validation" noValidate>
          <div className="col-md-12">
            <label htmlFor="validationCustom01" className="form-label">
              Prénom
            </label>
            <input
              type="text"
              className="form-control"
                id="validationCustom01"
                value={employee.firstName}
                onChange={(e) => setEmployee({...employee, firstName: e.target.value})}
              required
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="validationCustom02" className="form-label">
              Nom
            </label>
            <input
              type="text"
              className="form-control"
                id="validationCustom02"
                value={employee.lastName}
                onChange={(e) => setEmployee({...employee, lastName: e.target.value})}
              required
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="validationCustomUsername" className="form-label">
              Email
            </label>
            <div className="input-group has-validation">
              <input
                type="text"
                className="form-control"
                  id="validationCustomUsername"
                  value={employee.email}
                onChange={(e) => setEmployee({...employee, email: e.target.value})}
                required
              />
            </div>
          </div>
          <div className="col-md-12">
            <label htmlFor="validationCustomUsername" className="form-label">
              Addresse
            </label>
            <div className="input-group has-validation">
              <input
                type="text"
                className="form-control"
                  id="validationCustomUsername"
                  value={employee.address}
                onChange={(e) => setEmployee({...employee, address: e.target.value})}
                required
              />
            </div>
          </div>
          <div className="col-md-12">
            <label htmlFor="validationCustom03" className="form-label">
              Téléphone
            </label>
            <input
              type="text"
              className="form-control"
                id="validationCustom03"
                value={employee.phone}
                onChange={(e) => setEmployee({...employee, phone: e.target.value})}
              required
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="validationCustom03" className="form-label">
              Montant de son Salaire
            </label>
            <input
              type="text"
              className="form-control"
                id="validationCustom03"
                value={employee.salary}
                onChange={(e) => setEmployee({...employee, salary: e.target.value})}
              required
            />
            </div>
            <div className="col-md-12">
            <label htmlFor="validationCustom03" className="form-label">
              Position
            </label>
            <input
              type="text"
              className="form-control"
                id="validationCustom03"
                value={employee.position}
                onChange={(e) => setEmployee({...employee, position: e.target.value})}
              required
            />
          </div>
          <div className="col-12 d-flex justify-content-center gap-4 mb-3">
            <button className="btn btn-primary" type="button" onClick={handleCancel}>
              Annuler
            </button>
            <button className="btn btn-primary" type="submit">
              Editer
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default EditEmployee