import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const BreadCrumbLink = ({ condition, name, url }) => {
  const active = url === document.location.pathname;
  if (!active && !condition) return null;
  return (
    <li key={name} className={classNames('breadcrumb-item', { active: url === document.location.pathname })}>
      {active ? name : <Link to={url}>{name}</Link>}
    </li>
  );
};

BreadCrumbLink.propTypes = {
  condition: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

BreadCrumbLink.defaultProps = {};

export default BreadCrumbLink;
