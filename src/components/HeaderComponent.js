import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const checkActive = (match, location) => {
  if(location===false){
    return false;
  }
  const { pathname } = location;
  return pathname === "/";
}

export const PageTitle = ({page_title}) => (
  <div className = "header-wrapper">
    <h4 className = "header-small">
      {page_title}
    </h4>
  </div>
)

export const NavigationBar = () => (
  <ul className="horizontal-menu">
    <li> <NavLink to = '/' activeClassName="active-link" isActive={checkActive}>Home</NavLink> </li>
    <li> <NavLink to = '/about' activeClassName="active-link">About Us</NavLink> </li>
    <li> <NavLink to = '/error' activeClassName="active-link">Love Error?</NavLink> </li>
  </ul>
)

PageTitle.propTypes = {
  page_title: PropTypes.string,
}
