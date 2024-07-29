import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const EmployeeForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");
  const [departmentId, setDepartmentId] = useState("");

  const [departments, setDepartments] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchDepartment = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/departments");
        const data = await response.json();
        setDepartments(data);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };
    fetchDepartment()
  }, [])
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const employeeRequest = {
      firstName,
      lastName,
      email,
      address,
      phone,
      position,
      salary,
      departmentId
    };

    console.log(employeeRequest);

    fetch("http://localhost:8080/api/employees", {
      method: "POST",
      body: JSON.stringify(employeeRequest),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          navigate("/employees");
          console.log("employee created");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="container d-flex justify-content-center align-content-center">
      <div className="card h-auto" style={{ maxWidth: "700px" }}>
        <div className="card-body">
          <h5 className="card-title">Ajout Employee</h5>

          <form
            onSubmit={handleSubmit}
            className="row g-3 needs-validation"
            noValidate
          >
            <div className="col-md-12">
              <label htmlFor="validationCustom01" className="form-label">
                Prénom
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-12">
              <label htmlFor="validationCustom02" className="form-label">
                Nom
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom02"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              <div className="valid-feedback">Looks good!</div>
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div className="invalid-feedback">
                  Addresse Email est requis.
                </div>
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
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
                <div className="invalid-feedback">Addresse est requis</div>
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
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <div className="invalid-feedback">
                Le numero de téléphone est requis
              </div>
            </div>
            <div className="col-md-12">
              <label htmlFor="validationCustom03" className="form-label">
                Montant du salaire
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom03"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                required
              />
              <div className="invalid-feedback">Montant du salaire</div>
            </div>
            <div className="col-md-12">
              <label htmlFor="validationCustom03" className="form-label">
                Position
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom03"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                required
              />
              <div className="invalid-feedback">Position</div>
            </div>
            <div className="col-md-12">
            <label htmlFor="validationCustom03" className="form-label">
                Département
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                value={departmentId}
                onChange={(e) => setDepartmentId(e.target.value)}
              >
                <option selected>sélectionner un département</option>
                {departments.map(department => (
                  <option key={department.id} value={department.id}>{department.name}</option>
                ))}
              </select>
            </div>
            <div className="col-12 d-flex justify-content-center gap-4 mb-3">
              <button className="btn btn-primary" type="button">
                Annuler
              </button>
              <button className="btn btn-primary" type="submit">
                Ajouter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployeeForm;
