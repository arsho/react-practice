import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const PageTitle = ({page_title}) => (
  <div className = "header-wrapper">
    <h4 className = "header-small">
      {page_title}
    </h4>
  </div>
)

export const NavigationBar = () => (
  <ul className="horizontal-menu">
    <li> <Link to = '/'>Home</Link> </li>
    <li> <Link to = '/about'>About Us</Link> </li>
  </ul>
)

PageTitle.propTypes = {
  page_title: PropTypes.string,
}
