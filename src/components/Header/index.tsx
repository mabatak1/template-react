import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const Header: React.FC = (props) => {
  return (
    // <div className="header">
    //   <Link to="/">Home</Link>
    //   <Link to="/login">Login</Link>
    //   <Link to="/dashboard">Dashboard</Link>
    // </div>
    <div>
      <Breadcrumb tag="nav" listTag="div">
        <BreadcrumbItem>
          <Link to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/login">Login</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/dashboard">Dashboard</Link>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default Header;
