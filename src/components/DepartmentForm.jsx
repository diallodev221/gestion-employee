import { useState } from "react";
import { useNavigate } from "react-router";

const DepartmentForm = () => {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [manager, setManager] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const deptRequest = {
      name,
      description,
      manager
    }
    console.log(deptRequest);

   fetch("http://localhost:8080/api/departments",
      {
        method: "POST",
        body: JSON.stringify(deptRequest),
        headers: {"Content-Type": "application/json"}
      }
   ).then((res) => {
     if (res.ok) {
       navigate("/departments")
       console.log("department created");
     }
     
   }).catch(err => {
      console.error(err)
    })

    

  };

  return (
    <div className="container d-flex justify-content-center align-content-center">
      <div className="card h-auto" style={{ maxWidth: "700px" }}>
        <div className="card-body">
          <h5 className="card-title">Ajout Département</h5>

          <form onSubmit={handleSubmit} className="row g-3 needs-validation" noValidate>
            <div className="col-md-12">
              <label htmlFor="validationCustom01" className="form-label">
                Nom
              </label>
              <input
                id="validationCustom01"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-12">
              <label htmlFor="validationCustom02" className="form-label">
                Description
              </label>
              <input
                type="text"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-control"
                id="validationCustom02"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-12">
              <label htmlFor="validationCustomUsername" className="form-label">
                Manager
              </label>
              <div className="input-group has-validation">
                <input
                  type="text"
                  name="manager"
                  value={manager}
                  onChange={(e) => setManager(e.target.value)}
                  className="form-control"
                  required
                />
                <div className="invalid-feedback">le manager est requis.</div>
              </div>
            </div>

            <div className="col-12 d-flex justify-content-center gap-4 mb-3">
              <button className="btn btn-primary" type="button">
                Annuler
              </button>
              <button className="btn btn-primary" type="submit" >
                Ajouter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DepartmentForm;
