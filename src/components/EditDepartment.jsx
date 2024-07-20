
const EditDepartment = () => {
  return (
    <div className="container d-flex justify-content-center align-content-center">
    <div className="card h-auto" style={{ maxWidth: "700px" }}>
      <div className="card-body">
        <h5 className="card-title">Editer Departement</h5>

        <form className="row g-3 needs-validation" noValidate>
          <div className="col-md-12">
            <label htmlFor="validationCustom01" className="form-label">
              Nom departement
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
            Description
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
              Manager
            </label>
            <div className="input-group has-validation">
              <input
                type="text"
                className="form-control"
                id="validationCustomUsername"
                required
              />
              <div className="invalid-feedback">
                le manager Email est requis.
              </div>
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
  )
}

export default EditDepartment