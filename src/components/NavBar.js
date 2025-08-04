import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const categories = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];

  return (
   <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">

      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Spy28 News</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {categories.map((category) => (
              <li className="nav-item" key={category}>
                <NavLink
                  className={({ isActive }) =>
                    `nav-link${isActive ? ' active fw-bold text-primary' : ''}`
                  }
                  to={`/${category}`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Spy28 logo on the right */}
          <span className="navbar-text glowing-logo">Spy28</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;