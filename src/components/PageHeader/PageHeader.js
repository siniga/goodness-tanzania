import React from "react";
import './PageHeader.css'

const PageHeader = ({header}) => {
  return (
    <div className="page-header-container">
         <h1>{header}</h1>
    </div>
  );
};

export default PageHeader;
