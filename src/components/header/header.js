import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.scss';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>RESTy</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <p className="link">Home</p>
              </Link>
            </li>
            <li>
              <NavLink to="/history">
                <p className="link">History</p>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
