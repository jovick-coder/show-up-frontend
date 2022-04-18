import React, { useState } from "react";
import { BsFacebook, BsGoogle, BsTwitter } from "react-icons/bs";
import "./LoginComponent.css";

function LoginComponent({ setIsLoggedIn, setIsError }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handelSubmit(e) {
    e.preventDefault();

    const inputElement = e.target;
    // console.dir(inputElement);
    if (userName === "") {
      inputElement[0].style.border = "solid red 1px";
      setIsError({
        error: true,
        message: "UserName is empty",
      });
      return;
    }
    inputElement[0].style.border = "solid  1px  #ced4da";
    if (password === "") {
      inputElement[1].style.border = "solid red 1px";
      setIsError({ error: true, message: "Password is empty" });
      return;
    }
    inputElement[1].style.border = "solid  1px  #ced4da";

    setIsLoggedIn(true);
  }
  return (
    <div className="LoginComponent">
      <form className=" p-2" onSubmit={(e) => handelSubmit(e)}>
        <h3 className="text-center">Login</h3>
        <input
          className="form-control my-2"
          type="username"
          placeholder="UserName"
          id="LoginComponentUserName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          className="form-control my-2"
          type="password"
          placeholder="Password"
          id="LoginComponentPassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-outline-success my-3" type="submit">
          Login
        </button>

        <LoginComponentIcon />
      </form>
    </div>
  );
}

export default LoginComponent;

export function LoginComponentIcon() {
  return (
    <ul className="LoginComponentIcon">
      <li className="g">
        <BsGoogle />
      </li>
      <li className="f">
        <BsFacebook />
      </li>
      <li className="t">
        <BsTwitter />
      </li>
    </ul>
  );
}
