import { useState, useEffect } from 'react';

const Dashboard = () => {

  const [totalEmployee, setTotalEmployee] = useState(0)
  const [totalDepartment, setTotalDepartment] = useState(0)
  const [totalSalary, setSalary] = useState(0)

  useEffect(() => {
    fetchTotalEmployees()
    fetchTotalSalary()
    fetchTotalDepartments()
  }, [])


  const fetchTotalEmployees = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/employees/total");
      const data = await response.json();
      setTotalEmployee(data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };
  const fetchTotalSalary = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/departments/total");
      const data = await response.json();
      setTotalDepartment(data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const fetchTotalDepartments = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/employees/total-salary");
      const data = await response.json();
      setSalary(data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };
  

  return (
    <>
      <div className="pagetitle">
        <h1>Dashboard</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
        </nav>
      </div>

      <section className="section dashboard w-100">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="card info-card sales-card">
              <div className="filter">
                <a className="icon" href="#" data-bs-toggle="dropdown">
                  <i className="bi bi-three-dots"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li className="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      Today
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      This Month
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      This Year
                    </a>
                  </li>
                </ul>
              </div>

              <div className="card-body">
                <h5 className="card-title text-start">Employées</h5>

                <div className="d-flex align-items-center">
                  <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    <i className="bi bi-people"></i>
                  </div>
                  <div className="ps-3">
                    <h6>{totalEmployee}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4">
            <div className="card info-card revenue-card">
              <div className="filter">
                <a className="icon" href="#" data-bs-toggle="dropdown">
                  <i className="bi bi-three-dots"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li className="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      Today
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      This Month
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      This Year
                    </a>
                  </li>
                </ul>
              </div>

              <div className="card-body">
                <h5 className="card-title text-start">Départements</h5>

                <div className="d-flex align-items-center">
                  <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    <i className="bi bi-building"></i>
                  </div>
                  <div className="ps-3">
                    <h6>{ totalDepartment}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4">
            <div className="card info-card customers-card">
              <div className="filter">
                <a className="icon" href="#" data-bs-toggle="dropdown">
                  <i className="bi bi-three-dots"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li className="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      Today
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      This Month
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      This Year
                    </a>
                  </li>
                </ul>
              </div>

              <div className="card-body">
                <h5 className="card-title">Salaire total</h5>

                <div className="d-flex align-items-center">
                  <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    <i className="bi bi-currency-dollar"></i>
                  </div>
                  <div className="ps-3">
                    <h6>{totalSalary}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
