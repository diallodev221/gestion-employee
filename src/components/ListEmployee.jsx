
const ListEmployee = () => {
  return (
    <>
      <div className="pagetitle">
      <h1>Liste Employees</h1>
    </div>

    <section className="section">
      <div className="row">
        <div className="col-lg-12">

          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Employees</h5>

              <table className="table datatable">
                <thead>
                  <tr>
                    <th>
                      <b>Prenom</b>
                    </th>
                    <th>Nom</th>
                    <th>Telephone</th>
                    <th>Addresse</th>
                    <th>Email</th>
                    <th data-type="date" data-format="YYYY/DD/MM">BirthDate</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Unity </td>
                    <td>Pugh</td>
                    <td>778889900</td>
                    <td>Dakar</td>
                    <td>pugh@gmail.com</td>
                    <td>2005/02/11</td>
                    <td><span className="badge text-bg-success">active</span></td>
                    </tr>
                    <tr>
                    <td>Unity </td>
                    <td>Pugh</td>
                    <td>778889900</td>
                    <td>Dakar</td>
                    <td>pugh@gmail.com</td>
                    <td>2005/02/11</td>
                    <td><span className="badge text-bg-success">active</span></td>
                    </tr>
                    <tr>
                    <td>Unity </td>
                    <td>Pugh</td>
                    <td>778889900</td>
                    <td>Dakar</td>
                    <td>pugh@gmail.com</td>
                    <td>2005/02/11</td>
                    <td><span className="badge text-bg-success">active</span></td>
                    </tr>
                    <tr>
                    <td>Unity </td>
                    <td>Pugh</td>
                    <td>778889900</td>
                    <td>Dakar</td>
                    <td>pugh@gmail.com</td>
                    <td>2005/02/11</td>
                    <td><span className="badge text-bg-success">active</span></td>
                    </tr>
                    <tr>
                    <td>Unity </td>
                    <td>Pugh</td>
                    <td>778889900</td>
                    <td>Dakar</td>
                    <td>pugh@gmail.com</td>
                    <td>2005/02/11</td>
                    <td><span className="badge text-bg-success">active</span></td>
                    </tr>
                    <tr>
                    <td>Unity </td>
                    <td>Pugh</td>
                    <td>778889900</td>
                    <td>Dakar</td>
                    <td>pugh@gmail.com</td>
                    <td>2005/02/11</td>
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

export default ListEmployee