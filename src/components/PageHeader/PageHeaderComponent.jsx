import React, { Children } from "react";
import "./PageHeaderComponent.css";

function PageHeaderComponent({ children }) {
  return (
    <div className="PageHeaderComponent">
      <h3 className="m-3 d-flex">{children}</h3>
      <hr />
    </div>
  );
}

export default PageHeaderComponent;
