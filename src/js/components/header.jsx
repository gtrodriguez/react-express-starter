import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
class Header extends React.Component {
  render() {
    return (<div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link className="home-link" to="/">Home</Link>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>);
  }
};

export default Header;