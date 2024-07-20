const EmployeeForm = () => {
  return (
    <div className="container d-flex justify-content-center align-content-center">
      <div className="card h-auto" style={{ maxWidth: "700px" }}>
        <div className="card-body">
          <h5 className="card-title">Ajout Employee</h5>

          <form className="row g-3 needs-validation" noValidate>
            <div className="col-md-12">
              <label htmlFor="validationCustom01" className="form-label">
                Prenom
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
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
                  required
                />
                <div className="invalid-feedback">Addresse est requis</div>
              </div>
            </div>
            <div className="col-md-12">
              <label htmlFor="validationCustom03" className="form-label">
                Telephone
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom03"
                required
              />
              <div className="invalid-feedback">
                Le numero de telephone est requis
              </div>
            </div>
            <div className="col-md-12">
              <label htmlFor="validationCustom03" className="form-label">
                Date de naissance
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom03"
                required
              />
              <div className="invalid-feedback">
                Date de naissance est requis.
              </div>
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
