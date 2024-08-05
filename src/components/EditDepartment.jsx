import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

// eslint-disable-next-line react/prop-types
const EditDepartment = () => {

  const { id } = useParams();

  const [departement, setDepartement] = useState({ id: id, name: '', description: '', manager: '' })
  
  useEffect(() => {
    fetch(`http://localhost:8080/api/departments/${id}`)
      .then(res => res.json())
      .then((data) => {
       setDepartement({...departement, name: data.name, description: data.description, manager: data.manager})
   }).catch(err => {
      console.error(err)
    })
  }, [])
  

  const navigate = useNavigate();

  function handleCancel() {
    navigate('/departments')
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const deptRequest = {
      ...departement
    };

    // eslint-disable-next-line react/prop-types
    fetch(`http://localhost:8080/api/departments/${id}`, {
      method: "PUT",
      body: JSON.stringify(deptRequest),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          navigate("/departments");
          console.log("department created");
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
          <h5 className="card-title">Edit Département</h5>

          <form onSubmit={handleSubmit} className="row g-3 needs-validation" noValidate>
            <div className="col-md-12">
              <label htmlFor="validationCustom01" className="form-label">
                Nom
              </label>
              <input
                id="validationCustom01"
                type="text"
                name="name"
                value={departement.name}
                onChange={(e) => setDepartement({...departement, name: e.target.value})}
                className="form-control"
                required
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="validationCustom02" className="form-label">
                Description
              </label>
              <input
                type="text"
                name="description"
                value={departement.description}
                onChange={(e) => setDepartement({...departement, description: e.target.value})}
                className="form-control"
                id="validationCustom02"
                required
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="manager" className="form-label">
                Manager
              </label>
              <div className="input-group has-validation">
                <input
                  type="text"
                  name="manager"
                  value={departement.manager}
                  onChange={(e) => setDepartement({...departement, manager: e.target.value})}
                  className="form-control"
                  required
                />
              </div>
            </div>

            <div className="col-12 d-flex justify-content-center gap-4 mb-3">
              <button className="btn btn-primary" type="button" onClick={handleCancel}>
                Annuler
              </button>
              <button className="btn btn-primary" type="submit" >
                Editer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditDepartment;
