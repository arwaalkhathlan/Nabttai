// BreadcrumbLink.js
import React from 'react';
import { Link } from 'react-router-dom';

const BreadcrumbLink = ({ to, label, className, active }) => {
  if (active) {
    return <span className={`breadcrumb-item active ${className}`}>{label}</span>;
  }

  return (
    <Link to={to} className={`breadcrumb-item ${className}`}>
      {label}
    </Link>
  );
};

export default BreadcrumbLink;
