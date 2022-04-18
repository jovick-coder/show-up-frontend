import React from "react";
import "./NotFound.css";
import { BsExclamationDiamondFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="NotFound">
      <BsExclamationDiamondFill className="NotFoundIcon" />
      <h2 className="NotFoundText"> Page Not Found</h2>
      <Link to="/">
        {" "}
        <button className="btn btn-primary">Go Back Home</button>
      </Link>
    </div>
  );
}

export default NotFound;
