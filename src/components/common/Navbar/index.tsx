import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <BrowserRouter>
        <nav
          className="navbar navbar-expand-lg navbar navbar-dark bg-dark"
          id="navbar"
        >
          <div className="container-fluid">
            <NavLink className="navbar-brand" to={"/"}>
              ConectADAs
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    to={"/login"}
                    className="nav-link active"
                    aria-current="page"
                  >
                    Ingresar
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={"/signup"}
                    className="nav-link active"
                    aria-current="page"
                  >
                    Registrarse
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={"/logout"}
                    className="nav-link active"
                    aria-current="page"
                  >
                    Cerrar sesión
                  </NavLink>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Buscar amigos"
                  aria-label="Search"
                />
                <button className="btn btn-outline btn-dark" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </BrowserRouter>
    </>
  );
};

export { Navbar };
