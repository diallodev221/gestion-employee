import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <header
      id="header"
      className="header fixed-top d-flex align-items-center"
    >
      <div className="d-flex align-items-center justify-content-between">
        <Link to='/' className="logo d-flex align-items-center">
          <img src="assets/img/logo.png" alt="" />
          <span className="d-none d-lg-block">GDE</span>
        </Link>
        <i className="bi bi-list toggle-sidebar-btn"></i>
      </div>

      

      <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">
          <li className="nav-item d-block d-lg-none">
            <a className="nav-link nav-icon search-bar-toggle " href="#">
              <i className="bi bi-search"></i>
            </a>
          </li>
          <li className="nav-item dropdown pe-3">
            <a
              className="nav-link nav-profile d-flex align-items-center pe-0"
              href="#"
              data-bs-toggle="dropdown"
            >
              <img
                src="/img/profile-img.jpg"
                alt="Profile"
                className="rounded-circle"
              />
              <span className="d-none d-md-block dropdown-toggle ps-2">
                Diallo
              </span>
            </a>

            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
              <li className="dropdown-header">
                <h6>Diallo</h6>
                <span>Web Developer</span>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <Link
                  className="dropdown-item d-flex align-items-center"
                  to='/'
                >
                  <i className="bi bi-person"></i>
                  <span>Profile</span>
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <Link
                  className="dropdown-item d-flex align-items-center"
                 to='/'
                >
                  <i className="bi bi-gear"></i>
                  <span>Parametres</span>
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <Link
                  className="dropdown-item d-flex align-items-center"
                  to='/login'
                >
                  <i className="bi bi-box-arrow-right"></i>
                  <span>Deconnexion</span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>

    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <Link to='/' className="nav-link " href="index.html">
            <i className="bi bi-grid"></i>
            <span>Tableau de bord</span>
          </Link>
        </li>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#components-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i className="bi bi-person"></i>
            <span>Employees</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="components-nav"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <Link to='/employees' href="components-alerts.html">
                <i className="bi bi-circle"></i>
                <span>Liste Employees</span>
              </Link>
            </li>
            <li>
              <Link to='/employees/ajout'>
                <i className="bi bi-circle"></i>
                <span>Ajout Employee</span>
              </Link>
            </li>
            <li>
              <Link to='/employees/edit'>
                <i className="bi bi-circle"></i>
                <span>Modifier Employee</span>
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#forms-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i className="bi bi-building"></i>
            <span>Departements</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="forms-nav"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <Link to='/departments'>
                <i className="bi bi-circle"></i>
                <span>Liste departement</span>
              </Link>
            </li>
            <li>
              <Link to='/departments/ajout'>
                <i className="bi bi-circle"></i>
                <span>Ajout departement</span>
              </Link>
            </li>
            <li>
              <Link to='/departments/edit'>
                <i className="bi bi-circle"></i>
                <span>Modifier departement</span>
              </Link>
            </li>
          </ul>
        </li>


        <li className="nav-item">
          <Link className="nav-link collapsed" to='/login'>
            <i className="bi bi-box-arrow-in-right"></i>
            <span>Deconnexion</span>
          </Link>
        </li>
      </ul>
    </aside>

    <main id="main" className="main">
        <Outlet />
    </main>

    <footer id="footer" className="footer">
      <div className="copyright">
        &copy; Copyright{" "}
        <strong>
          <span>Groupe 3 P8 MAI</span>
        </strong>
        . All Rights Reserved
      </div>
    </footer>

    
  </>
  )
}

export default Layout 