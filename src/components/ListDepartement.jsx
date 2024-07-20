
const ListDepartement = () => {
  return (
    <>
    <div className="pagetitle">
    <h1>Liste Departements</h1>
  </div>

  <section className="section">
    <div className="row">
      <div className="col-lg-12">

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Departements</h5>

            <table className="table datatable">
              <thead>
                <tr>
                  <th>
                    <b>ID departement</b>
                  </th>
                  <th>Nom </th>
                  <th>Description</th>
                  <th>Manager</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1234 </td>
                  <td>Marketing</td>
                  <td>Gestion du marketing</td>
                  <td>Kine</td>
                  <td><span className="badge text-bg-success">active</span></td>
                  </tr>
                  <tr>
                  <td>234</td>
                  <td>IT</td>
                  <td>gestion du systeme informatique</td>
                  <td>Pape</td>
                  <td><span className="badge text-bg-success">active</span></td>
                  </tr>
                  <tr>
                  <td>63774 </td>
                  <td>Finance</td>
                  <td>Gestion des finances</td>
                  <td>Katy</td>
                  <td><span className="badge text-bg-success">active</span></td>
                  </tr>
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

export default ListDepartement