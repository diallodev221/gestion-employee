import { useState } from "react";
import { useNavigate } from "react-router";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// eslint-disable-next-line react/prop-types
const EditDepartment = ({ department }) => {
  // eslint-disable-next-line react/prop-types
  const [name, setName] = useState(department.name);
  // eslint-disable-next-line react/prop-types
  const [description, setDescription] = useState(department.description);
  // eslint-disable-next-line react/prop-types
  const [manager, setManager] = useState(department.manager);

  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const deptRequest = {
      name,
      description,
      manager,
    };

    fetch(`http://localhost:8080/api/departments/${department.id}`, {
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
    <>
      <button
        type="button"
        className="nav-link nav-icon"
        // to={`/departments/${dept.id}/edit`}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <i className="bi bi-pencil-square"></i>
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Département
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="card h-auto" style={{ maxWidth: "700px" }}>
                <div className="card-body">
                  <form
                    onSubmit={handleSubmit}
                    className="row g-3 needs-validation"
                    noValidate
                  >
                    <div className="col-md-12">
                      <label
                        htmlFor="validationCustom01"
                        className="form-label"
                      >
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
                      <label
                        htmlFor="validationCustom02"
                        className="form-label"
                      >
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
                      <label
                        htmlFor="validationCustomUsername"
                        className="form-label"
                      >
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
                        <div className="invalid-feedback">
                          le manager est requis.
                        </div>
                      </div>
                    </div>

                    <div className="col-12 d-flex justify-content-center gap-4 ">
                      <button
                        className="btn btn-primary"
                        data-bs-dismiss="modal"
                      >
                        Annuler
                      </button>
                      <button
                        className="btn btn-primary"
                        type="submit"
                        data-bs-dismiss="modal"
                      >
                        Ajouter
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditDepartment;
