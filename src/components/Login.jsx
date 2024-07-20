import { useNavigate } from "react-router"

const Login = () => {
  const navigate = useNavigate();

  function navigateToDashboard() {
    navigate(`/`)
  }
  return (
    <main>
    <div className="container">

    <section className="section register min-vh-100 d-flex flex-column
      align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

              <div className="card mb-3">

                <div className="card-body">

                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">Connexion à votre compte</h5>
                    <p className="text-center small">Entrez votre nom dutilisateur et votre mot de passe pour vous connecter</p>
                  </div>

                  <form className="row g-3 needs-validation" noValidate>

                    <div className="col-12">
                      <label htmlFor="yourUsername" className="form-label">Username</label>
                      <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" name="username" className="form-control" id="yourUsername" required />
                        <div className="invalid-feedback">Username est requis.</div>
                      </div>
                    </div>

                    <div className="col-12">
                      <label htmlFor="yourPassword" className="form-label">Mot de Password</label>
                      <input type="password" name="password" className="form-control" id="yourPassword" required />
                      <div className="invalid-feedback">Mot de password est requis</div>
                    </div>

                    
                    <div className="col-12">
                        <button className="btn btn-primary w-100" type="submit" onClick={navigateToDashboard}>Connexion</button>
                    </div>
                    
                  </form>

                </div>
              </div>

              
              </div>

            </div>
          </div>

      </section>

    </div>
  </main>
  )
}

export default Login