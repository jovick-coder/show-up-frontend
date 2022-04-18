import React, { useEffect, useState } from "react";
import { BsX } from "react-icons/bs";
import "./ErrorComponent.css";

function ErrorComponent({ isError, setIsError }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsError({ error: false, message: "" });
    }, 3000);
    return () => clearTimeout(timer);
  }, [isError]);
  return (
    <div
      className="ErrorComponent"
      style={isError.error ? null : { display: "none" }}
    >
      {isError.message}
      <div className="close">
        {" "}
        <BsX onClick={() => setIsError({ error: false, message: "" })} />
      </div>
    </div>
  );
}

export default ErrorComponent;
